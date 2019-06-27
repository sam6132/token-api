const token = require('../contracts/ERC20');
const { web3, Tx } = require("../includes/web3")

const { sendSignedTransactionsForContracts } = require('../includes/sendSignedTransactions')

const contractInstance = new web3.eth.Contract(token.abi);



async function deploy(req, res) {
    let senderAddress = '0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4';
    let senderPrivateKey =
        '1A34E1E588F8FCAE4BB04FBBB69A9CEA48D09F8E01354388EC5F9D7C5DC95DAE';
    let name = req.body.name;
    let symbol = req.body.symbol;
    let decimals = req.body.decimals;
    let supply = req.body.totalSupply;

    if (
        !senderAddress ||
        !senderPrivateKey ||
        !name ||
        !symbol ||
        !supply ||
        !decimals
    ) {
        return res.status(200).send({ message: 'data insufficient' });
    }

    let contractData = contractInstance
        .deploy({
            data: token.bytecode,
            arguments: [name, symbol, decimals, supply]
        })
        .encodeABI();


    const result = await sendSignedTransactionsForContracts(contractData, senderAddress, senderPrivateKey, res)
    // console.log(result)
    res.send(result)
}




module.exports = { deploy }