const token = require('../contracts/ERC20');
const { web3, Tx } = require("../includes/web3")

const { sendSignedTransactionsForContracts } = require('../includes/sendSignedTransactions')

const contractInstance = new web3.eth.Contract(token.abi);



async function deploy(req, res) {

    let name = req.body.name;
    let symbol = req.body.symbol;
    let decimals = req.body.decimals;
    let supply = req.body.totalSupply;

    if (
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


    const result = await sendSignedTransactionsForContracts(contractData)
    // console.log(result)
    res.send(result)
}




module.exports = { deploy }