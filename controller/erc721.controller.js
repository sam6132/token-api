const token = require('../contracts/ERC721');
const { web3, Tx } = require("../includes/web3")



const contractInstance = new web3.eth.Contract(token.abi);
const { sendSignedTransactionsForContracts, sendSignedTransactionsForMethods } = require('../includes/sendSignedTransactions')


async function deploy(req, res) {


    let name = req.body.name;
    let symbol = req.body.symbol;






    if (

        !name ||
        !symbol

    ) {
        return res.status(400).json({ message: 'data insufficient' });
    }

    let contractData = contractInstance
        .deploy({
            data: token.bytecode,
            arguments: [name, symbol]
        })
        .encodeABI();
    await sendSignedTransactionsForContracts(contractData)

    // res.send(result)

}


async function mint(req, res) {

    try {
        let contract = await new web3.eth.Contract(token.abi, req.body.contract_address);

        let mint = contract.methods.mintWithTokenURI(senderAddress, req.body.tokenId, req.body.tokenURI)

        let mintABI = await mint.encodeABI()

        const data = await sendSignedTransactionsForMethods(mintABI, req.body.contract_address)

        res.send(data)

    } catch (err) { res.send({ "Error : ": err.message }) }

}

async function getBalance(req, res) {
    let contract = await new web3.eth.Contract(token.abi, req.body.contract_address);

    contract.methods.balanceOf(req.body.address).call({ from: senderAddress }, (err, result) => {
        res.send(web3.utils.fromWei(result + '', "wei"))
    })
}

async function ownerOf(req, res) {
    let contract = await new web3.eth.Contract(token.abi, req.body.contract_address);

    contract.methods.ownerOf(req.body.tokenId).call({ from: senderAddress }, (err, result) => {
        res.send(result)
    })
}


module.exports = { deploy, mint, getBalance, ownerOf }