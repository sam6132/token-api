const token = require('../contracts/SecuredToken');
const securityLogic = require('../contracts/securityLogic');
const captable = require('../contracts/captable');

const { web3, Tx } = require("../includes/web3")

const { sendSignedTransactionsForContracts, sendSignedTransactionsForMethods } = require('../includes/sendSignedTransactions')

const tokenInstance = new web3.eth.Contract(token.abi);
const securityLogicInstance = new web3.eth.Contract(securityLogic.abi);


const captable_address = "0xbA31e58E23D48d477c156Ed1c052a88756b341AE"

async function deploy(req, res) {
    // let owner = req.body.owner;
    const name = req.body.name;
    const symbol = req.body.symbol;
    const decimals = req.body.decimals;
    const supply = req.body.totalSupply;
    const manager = req.body.manager;
    const owner = req.body.owner;
    const resolver = req.body.resolver;


    if (
        !name ||
        !symbol ||
        !supply ||
        !manager ||
        !owner ||
        !resolver ||
        !decimals
    ) {
        return res.status(200).send({ message: 'data insufficient' });
    }


    try {

        let logic_address = await deploySecurityInstance(supply, manager, owner, resolver, res);


        // res.send(logic_instance)
        let tokenABI = tokenInstance
            .deploy({
                data: token.bytecode,
                arguments: [logic_address + '', owner, name, symbol, decimals]
            })
            .encodeABI();


        let result = await sendSignedTransactionsForContracts(tokenABI)

        res.send(result)




    } catch (err) { res.send({ "Error : ": err.message }) }







    // let logicABI = securityLogicInstance.deploy({
    //     data: captable.bytecode,
    //     arguments: [tokenLogic, owner, name, symbol, decimals, supply]

    // }).encodeABI();

    // const logic_result = await sendSignedTransactionsForContracts(captableABI)


    // let token = tokenInstance
    //     .deploy({
    //         data: token.bytecode,
    //         arguments: [tokenLogic, owner, name, symbol, decimals, supply]
    //     })
    //     .encodeABI();


    // let result = await sendSignedTransactionsForContracts(token, senderAddress, senderPrivateKey, res)

    // res.se?nd(result)
}

async function deploySecurityInstance(supply, manager, owner, resolver, res) {
    const index = await initializeCaptable(supply, manager);
    let logicABI = securityLogicInstance.deploy({
        data: securityLogic.bytecode,
        arguments: [index, captable_address, owner, resolver]
    }).encodeABI();
    const logic_result = await sendSignedTransactionsForContracts(logicABI);
    return (logic_result);
}

async function initializeCaptable(supply, manager) {
    const captableInstance = await new web3.eth.Contract(captable.abi, captable_address);

    let initialize = captableInstance.methods.initialize(supply, manager);
    let captableABI = await initialize.encodeABI();
    const result = await sendSignedTransactionsForMethods(captableABI, captable_address);
    // res.send(result.logs[0].data)
    return web3.utils.fromWei(result.logs[0].data + '', "wei");
}



module.exports = { deploy }