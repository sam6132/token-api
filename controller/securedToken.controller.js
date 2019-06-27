const token = require('../contracts/ERC20');
const captable = require('../contracts/captable');
const securityLogic = require('../contracts/securityLogic');

const { web3, Tx } = require("../includes/web3")

const { sendSignedTransactionsForContracts } = require('../includes/sendSignedTransactions')

const tokenInstance = new web3.eth.Contract(token.abi);
const captableInstance = new web3.eth.Contract(captable.abi);
const securityLogicInstance = new web3.eth.Contract(securityLogic.abi);



async function deploy(req, res) {
    let senderAddress = '0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4';
    let senderPrivateKey =
        '1A34E1E588F8FCAE4BB04FBBB69A9CEA48D09F8E01354388EC5F9D7C5DC95DAE';

    // let owner = req.body.owner;
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
        // !tokenLogic ||
        // !owner ||
        !decimals
    ) {
        return res.status(200).send({ message: 'data insufficient' });
    }


    let captableABI = captableInstance.deploy({
        data: captable.bytecode,
    }).encodeABI();

    const captable_result = await sendSignedTransactionsForContracts(captableABI, senderAddress, senderPrivateKey, res)

    // res.send(captable_result)

    let logicABI = securityLogicInstance.deploy({
        data: captable.bytecode,
        arguments: [tokenLogic, owner, name, symbol, decimals, supply]

    }).encodeABI();

    const logic_result = await sendSignedTransactionsForContracts(captableABI, senderAddress, senderPrivateKey, res)


    // let token = tokenInstance
    //     .deploy({
    //         data: token.bytecode,
    //         arguments: [tokenLogic, owner, name, symbol, decimals, supply]
    //     })
    //     .encodeABI();


    // let result = await sendSignedTransactionsForContracts(token, senderAddress, senderPrivateKey, res)

    // res.se?nd(result)
}




module.exports = { deploy }