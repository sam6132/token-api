const token = require('../contracts/ERC721');
const { web3, Tx } = require("../includes/web3")



const contractInstance = new web3.eth.Contract(token.abi);
const { sendSignedTransactionsForContracts, sendSignedTransactionsForMethods } = require('../includes/sendSignedTransactions')


const senderAddress = '0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4';
const senderPrivateKey =
    '1A34E1E588F8FCAE4BB04FBBB69A9CEA48D09F8E01354388EC5F9D7C5DC95DAE';
async function deploy(req, res) {


    let name = req.body.name;
    let symbol = req.body.symbol;






    if (
        !senderAddress ||
        !senderPrivateKey ||
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
    await sendSignedTransactionsForContracts(contractData, senderAddress, senderPrivateKey, res)

    // res.send(result)

}




async function mint(req, res) {

    try {
        let contract = await new web3.eth.Contract(token.abi, req.body.contract_address);

        let mint = contract.methods.mintWithTokenURI(senderAddress, req.body.tokenId, req.body.tokenURI)


        let mintABI = await mint.encodeABI()
        // console.log(methodMetadata)


        const data = await sendSignedTransactionsForMethods(mintABI, senderAddress, senderPrivateKey, res, req.body.contract_address)



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