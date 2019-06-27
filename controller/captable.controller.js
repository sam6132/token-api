const captable = require('../contracts/captable');
const { web3, Tx } = require("../includes/web3")

const { sendSignedTransactionsForContracts } = require('../includes/sendSignedTransactions')

const captableInstance = new web3.eth.Contract(captable.abi);



async function deploy(req, res) {


    let captableABI = captableInstance.deploy({
        data: captable.bytecode,
    }).encodeABI();

    const captable_result = await sendSignedTransactionsForContracts(captableABI)

    res.send(captable_result.address)
}




module.exports = { deploy }