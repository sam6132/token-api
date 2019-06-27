const token_abi = {
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "capTable",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "addresses",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "security",
                    "type": "uint256"
                }
            ],
            "name": "NewSecurity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "security",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "newAddress",
                    "type": "address"
                }
            ],
            "name": "SecurityMigration",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "security",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "supply",
                    "type": "uint256"
                },
                {
                    "name": "manager",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "security",
                    "type": "uint256"
                },
                {
                    "name": "newAddress",
                    "type": "address"
                }
            ],
            "name": "migrate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "security",
                    "type": "uint256"
                },
                {
                    "name": "src",
                    "type": "address"
                },
                {
                    "name": "dest",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": '0x60806040526000805534801561001457600080fd5b50610af4806100246000396000f3fe608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633656eec21461008857806336cd52a6146100f7578063405b84fa1461017c578063bd85b039146101d7578063c0a9ac5214610226578063da35a26f14610295578063edf26d9b14610304575b600080fd5b34801561009457600080fd5b506100e1600480360360408110156100ab57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061037f565b6040518082815260200191505060405180910390f35b34801561010357600080fd5b5061017a6004803603608081101561011a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103da565b005b34801561018857600080fd5b506101d56004803603604081101561019f57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061064c565b005b3480156101e357600080fd5b50610210600480360360208110156101fa57600080fd5b810190808035906020019092919050505061080b565b6040518082815260200191505060405180910390f35b34801561023257600080fd5b5061027f6004803603604081101561024957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610823565b6040518082815260200191505060405180910390f35b3480156102a157600080fd5b506102ee600480360360408110156102b857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610848565b6040518082815260200191505060405180910390f35b34801561031057600080fd5b5061033d6004803603602081101561032757600080fd5b8101908080359060200190929190505050610955565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006002600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b836001600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001807f74686973206d6574686f64204d5553542062652063616c6c656420627920746881526020017f65207365637572697479277320636f6e74726f6c206163636f756e740000000081525060400191505060405180910390fd5b61053a826002600088815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098890919063ffffffff16565b6002600087815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105f1826002600088815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a1390919063ffffffff16565b6002600087815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050505050565b816001600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610749576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001807f74686973206d6574686f64204d5553542062652063616c6c656420627920746881526020017f65207365637572697479277320636f6e74726f6c206163636f756e740000000081525060400191505060405180910390fd5b816001600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f343f449b287af22e936cbffaa1dc0a46b85633768d6f8936d88e301b06eba3f28383604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60036020528060005260406000206000915090505481565b6002602052816000526040600020602052806000526040600020600091509150505481565b600080610853610a9d565b9050826001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002600083815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360036000838152602001908152602001600020819055507fc31b84092c55acd52fc14788a39a39ad7dc0ba44d1c4d257f7a8bf78b54de426816040518082815260200191505060405180910390a18091505092915050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828211151515610a02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808284019050838110151515610a93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000806000549050610abb6001600054610a1390919063ffffffff16565b600081905550809150509056fea165627a7a72305820bb583c570eb03b3f946fc8c45eac365117ef14835e18dd802b871cf98127efaf0029'
}



module.exports = token_abi

