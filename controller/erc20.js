const token = require('../contracts/ERC20');
const { web3, Tx } = require("../includes/web3")



const contractInstance = new web3.eth.Contract(token.abi);



async function deploy(req, res) {
    let senderAddress = '0xea6ffc68F07322eF222b3904b9C34C38fD9E245f';
    let senderPrivateKey =
        '78D1244258BF4A73880AA5D55B3782CC18F16435D0E0F4762376920673B0975A';
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
        return res.json({ status: 400, message: 'data insufficient' });
    }

    let contractData = contractInstance
        .deploy({
            data: token.bytecode,
            arguments: [name, symbol, decimals, supply]
        })
        .encodeABI();
    let txObject = {};
    let nonce = null;
    let gasPrice = null;
    Promise.all([web3.eth.getTransactionCount(senderAddress), web3.eth.getGasPrice()])
        .then(result => {
            nonce = result[0];
            gasPrice = result[1];
            gasPrice = (parseInt(gasPrice) + parseInt(gasPrice / 2)).toString();
            txObject = {
                from: senderAddress,
                nonce: web3.utils.toHex(nonce),
                data: contractData
            };
            return web3.eth.estimateGas(txObject);
        })
        .then(estimateGas => {
            txObject.gasPrice = web3.utils.toHex(gasPrice);
            txObject.gas = web3.utils.toHex(estimateGas);
            const tx = new Tx(txObject);
            const privateKey = Buffer.from(senderPrivateKey, 'hex');
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');
            web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
                console.log('err:', err, 'txHash:', txHash)
                // Use this txHash to find the contract on Etherscan!


                let getTransaction = setInterval(async () => {
                    await web3.eth.getTransactionReceipt(txHash, async function (error, result) {
                        if (error) {
                            clearInterval(getTransaction)

                            return res.send({ 'errrr': error })
                        }

                        if (result) {
                            clearInterval(getTransaction)
                            instance = result
                            // console.log(result)
                            // let contract = await new web3.eth.Contract(token.abi, result.contractAddress);

                            // let transactionHash = web3.utils.sha3(serializedTx)
                            // console.log("transactionHash..", transactionHash);


                            res.json(
                                { "address": result.contractAddress },
                                { "transaction_hash": txHash }
                            )

                            return
                        }



                    });
                }, 2000)

            });

        })
}




module.exports = { deploy }