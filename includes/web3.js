
const Web3 = require('web3');
const Tx = require('ethereumjs-tx')



const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/8fde3daff49e4e4ba9966b2d75bba65a"))


module.exports = { web3, Tx }