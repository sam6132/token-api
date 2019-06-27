const { web3, Tx } = require("../includes/web3")



async function sendSignedTransactionsForContracts(data, senderAddress, senderPrivateKey, res) {
    let txObject = {};
    let nonce = null;
    let gasPrice = null;
    return new Promise(async resolve => {

        await Promise.all([web3.eth.getTransactionCount(senderAddress), web3.eth.getGasPrice()])
            .then(result => {
                nonce = result[0];
                gasPrice = result[1];
                gasPrice = (parseInt(gasPrice) + parseInt(gasPrice / 2)).toString();
                txObject = {
                    from: senderAddress,
                    nonce: web3.utils.toHex(nonce),
                    data: data
                };
                // console.log(txObject)
                return web3.eth.estimateGas(txObject);
            })
            .then(estimateGas => {
                // console.log(estimateGas)
                txObject.gasPrice = web3.utils.toHex(gasPrice);
                txObject.gas = web3.utils.toHex(estimateGas);
                const tx = new Tx(txObject);
                const privateKey = Buffer.from(senderPrivateKey, 'hex');
                tx.sign(privateKey);
                const serializedTx = tx.serialize();
                const raw = '0x' + serializedTx.toString('hex');
                // console.log({ "raw .....": raw })
                web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
                    console.log('err:', err, 'txHash:', txHash)
                    // Use this txHash to find the contract on Etherscan!
                    let getTransaction = setInterval(async () => {
                        web3.eth.getTransactionReceipt(txHash, async function (error, result) {
                            if (error) {
                                clearInterval(getTransaction)
                                // console.log({ 'errrr': error })
                                res.send({ 'errrr': error })
                            }

                            if (result) {
                                clearInterval(getTransaction)
                                // console.log("Transaction result ....", result)

                                // console.log({ "address": result.contractAddress + '', "transaction_hash": txHash + '' })
                                resolve({ "address": result.contractAddress + '', "transaction_hash": txHash + '' })


                            }



                        });

                    }, 600)

                })

            })


    })





}


async function sendSignedTransactionsForMethods(data, senderAddress, senderPrivateKey, res, contract_address) {
    Promise.all([web3.eth.getTransactionCount(senderAddress), web3.eth.getGasPrice()])
        .then(result => {
            nonce = result[0];
            const tx = {
                nonce: web3.utils.toHex(nonce),

                from: senderAddress,
                to: contract_address,
                gas: 2000000,
                data: data,
            };


            web3.eth.accounts.signTransaction(tx, senderPrivateKey).then(signed => {
                const tran = web3.eth
                    .sendSignedTransaction(signed.rawTransaction, async (err, txHash) => {
                        console.log('err:', err, 'txHash:', txHash)
                        // Use this txHash to find the contract on Etherscan!


                        let getTransaction = setInterval(async () => {
                            await web3.eth.getTransactionReceipt(txHash, async function (error, result) {
                                if (error) {
                                    clearInterval(getTransaction)
                                    // console.log({ 'errrr': error })
                                    res.send({ 'errrr': error })
                                }

                                if (result) {
                                    clearInterval(getTransaction)
                                    // console.log({ "address": result.contractAddress + '', "transaction_hash": txHash + '' })
                                    res.send({ "result": result, "transaction_hash": txHash + '' })
                                }



                            });
                        }, 600)

                    });

            });

        })


}


module.exports = { sendSignedTransactionsForContracts, sendSignedTransactionsForMethods }