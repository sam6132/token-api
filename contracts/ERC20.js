const token_abi = {
    abi: [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
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
            "constant": false,
            "inputs": [
                {
                    "name": "sender",
                    "type": "address"
                },
                {
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
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
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
            "inputs": [
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "name": "decimals",
                    "type": "uint8"
                },
                {
                    "name": "totalSupply",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ],
    "bytecode": '0x60806040523480156200001157600080fd5b506040516200155438038062001554833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b50509291906020018051906020019092919080519060200190929190505050838383826003908051906020019062000111929190620003d7565b5081600490805190602001906200012a929190620003d7565b5080600560006101000a81548160ff021916908360ff1602179055505050506200016433826200016e640100000000026401000000009004565b5050505062000486565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151562000214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b62000239816002546200034c6401000000000262001008179091906401000000009004565b600281905550620002a0816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200034c6401000000000262001008179091906401000000009004565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000808284019050838110151515620003cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200041a57805160ff19168380011785556200044b565b828001600101855582156200044b579182015b828111156200044a5782518255916020019190600101906200042d565b5b5090506200045a91906200045e565b5090565b6200048391905b808211156200047f57600081600090555060010162000465565b5090565b90565b6110be80620004966000396000f3fe6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014457806318160ddd146101b757806323b872dd146101e2578063313ce5671461027557806339509351146102a657806370a082311461031957806395d89b411461037e578063a457c2d71461040e578063a9059cbb14610481578063dd62ed3e146104f4575b600080fd5b3480156100c057600080fd5b506100c9610579565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101095780820151818401526020810190506100ee565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015057600080fd5b5061019d6004803603604081101561016757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061061b565b604051808215151515815260200191505060405180910390f35b3480156101c357600080fd5b506101cc610632565b6040518082815260200191505060405180910390f35b3480156101ee57600080fd5b5061025b6004803603606081101561020557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061063c565b604051808215151515815260200191505060405180910390f35b34801561028157600080fd5b5061028a6106ed565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102b257600080fd5b506102ff600480360360408110156102c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610704565b604051808215151515815260200191505060405180910390f35b34801561032557600080fd5b506103686004803603602081101561033c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107a9565b6040518082815260200191505060405180910390f35b34801561038a57600080fd5b506103936107f1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d35780820151818401526020810190506103b8565b50505050905090810190601f1680156104005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561041a57600080fd5b506104676004803603604081101561043157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610893565b604051808215151515815260200191505060405180910390f35b34801561048d57600080fd5b506104da600480360360408110156104a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610938565b604051808215151515815260200191505060405180910390f35b34801561050057600080fd5b506105636004803603604081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061094f565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b5050505050905090565b60006106283384846109d6565b6001905092915050565b6000600254905090565b6000610649848484610c57565b6106e284336106dd85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f7d90919063ffffffff16565b6109d6565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061079f338461079a85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461100890919063ffffffff16565b6109d6565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108895780601f1061085e57610100808354040283529160200191610889565b820191906000526020600020905b81548152906001019060200180831161086c57829003601f168201915b5050505050905090565b600061092e338461092985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f7d90919063ffffffff16565b6109d6565b6001905092915050565b6000610945338484610c57565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610aa1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481526020017f726573730000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f45524332303a20617070726f766520746f20746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d22576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f45524332303a207472616e736665722066726f6d20746865207a65726f20616481526020017f647265737300000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ded576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f45524332303a207472616e7366657220746f20746865207a65726f206164647281526020017f657373000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b610e3e816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f7d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ed1816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461100890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211151515610ff7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808284019050838110151515611088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fea165627a7a723058208f58578be70e217cdccbcf557bf87b8011e144e4483bda9f393f5ffa4c3e62f00029'
}



module.exports = token_abi

