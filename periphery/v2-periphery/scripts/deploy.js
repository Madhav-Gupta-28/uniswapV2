const ethers = require('ethers');

async function deployContract() {

    const abi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_factory",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_WETH",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "WETH",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountADesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidityETH",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
            }
          ],
          "name": "getAmountIn",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
            }
          ],
          "name": "getAmountOut",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            }
          ],
          "name": "getAmountsIn",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            }
          ],
          "name": "getAmountsOut",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveB",
              "type": "uint256"
            }
          ],
          "name": "quote",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidityETH",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityETHWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapETHForExactTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactETHForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForETH",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapTokensForExactETH",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapTokensForExactTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ];


     bytecode = "0x60c060405234801561001057600080fd5b5060405162004926380380620049268339818101604052604081101561003557600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6147a1620001856000398061019f5280610d3a5280610d755280610e6c528061109c5280611426528061159e52806119655280611a715280611b275280611bf55280611d4d5280611dd5528061201a52806120955280612144528061221052806122b7528061232b52806128425280612ab55280612b0b5280612b3f5280612bb35280612d535280612ea85280612f30525080610f0c5280610fe35280611162528061119b52806112d652806114c6528061157c52806116ec5280611c9a5280611e075280611f6a528061235d52806125b652806127c752806127f05280612820528061298d5280612ae95280612df85280612f62528061384e52806138915280613b745280613cfa5280614164528061422b52806142ab52506147a16000f3fe60806040526004361061018f5760003560e01c80638803dbee116100d6578063c45a01551161007f578063e8e3370011610059578063e8e3370014610ba1578063f305d71914610c21578063fb3bdb4114610c67576101c8565b8063c45a015514610a62578063d06ca61f14610a77578063ded9382a14610b2e576101c8565b8063af2979eb116100b0578063af2979eb1461092c578063b6f9de951461097f578063baa2abde14610a05576101c8565b80638803dbee1461082d578063ad5c4648146108c5578063ad615dec146108f6576101c8565b80634a25d94a11610138578063791ac94711610112578063791ac947146106d95780637ff36ab51461077157806385f8c259146107f7576101c8565b80634a25d94a146105365780635b0d5984146105ce5780635c11d79514610641576101c8565b80631f00ca74116101695780631f00ca74146103695780632195995c1461042057806338ed17391461049e576101c8565b806302751cec146101cd578063054d50d41461023957806318cbafe514610281576101c8565b366101c857336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101c657fe5b005b600080fd5b3480156101d957600080fd5b50610220600480360360c08110156101f057600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135610ced565b6040805192835260208301919091528051918290030190f35b34801561024557600080fd5b5061026f6004803603606081101561025c57600080fd5b5080359060208101359060400135610e07565b60408051918252519081900360200190f35b34801561028d57600080fd5b50610319600480360360a08110156102a457600080fd5b8135916020810135918101906060810160408201356401000000008111156102cb57600080fd5b8201836020820111156102dd57600080fd5b803590602001918460208302840111640100000000831117156102ff57600080fd5b91935091506001600160a01b038135169060200135610e1c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561035557818101518382015260200161033d565b505050509050019250505060405180910390f35b34801561037557600080fd5b506103196004803603604081101561038c57600080fd5b813591908101906040810160208201356401000000008111156103ae57600080fd5b8201836020820111156103c057600080fd5b803590602001918460208302840111640100000000831117156103e257600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061115b945050505050565b34801561042c57600080fd5b50610220600480360361016081101561044457600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff6101008201351690610120810135906101400135611191565b3480156104aa57600080fd5b50610319600480360360a08110156104c157600080fd5b8135916020810135918101906060810160408201356401000000008111156104e857600080fd5b8201836020820111156104fa57600080fd5b8035906020019184602083028401116401000000008311171561051c57600080fd5b91935091506001600160a01b03813516906020013561128b565b34801561054257600080fd5b50610319600480360360a081101561055957600080fd5b81359160208101359181019060608101604082013564010000000081111561058057600080fd5b82018360208201111561059257600080fd5b803590602001918460208302840111640100000000831117156105b457600080fd5b91935091506001600160a01b0381351690602001356113d6565b3480156105da57600080fd5b5061026f60048036036101408110156105f257600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135611574565b34801561064d57600080fd5b506101c6600480360360a081101561066457600080fd5b81359160208101359181019060608101604082013564010000000081111561068b57600080fd5b82018360208201111561069d57600080fd5b803590602001918460208302840111640100000000831117156106bf57600080fd5b91935091506001600160a01b038135169060200135611682565b3480156106e557600080fd5b506101c6600480360360a08110156106fc57600080fd5b81359160208101359181019060608101604082013564010000000081111561072357600080fd5b82018360208201111561073557600080fd5b8035906020019184602083028401116401000000008311171561075757600080fd5b91935091506001600160a01b038135169060200135611917565b6103196004803603608081101561078757600080fd5b813591908101906040810160208201356401000000008111156107a957600080fd5b8201836020820111156107bb57600080fd5b803590602001918460208302840111640100000000831117156107dd57600080fd5b91935091506001600160a01b038135169060200135611bad565b34801561080357600080fd5b5061026f6004803603606081101561081a57600080fd5b5080359060208101359060400135611f12565b34801561083957600080fd5b50610319600480360360a081101561085057600080fd5b81359160208101359181019060608101604082013564010000000081111561087757600080fd5b82018360208201111561088957600080fd5b803590602001918460208302840111640100000000831117156108ab57600080fd5b91935091506001600160a01b038135169060200135611f1f565b3480156108d157600080fd5b506108da612018565b604080516001600160a01b039092168252519081900360200190f35b34801561090257600080fd5b5061026f6004803603606081101561091957600080fd5b508035906020810135906040013561203c565b34801561093857600080fd5b5061026f600480360360c081101561094f57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135612049565b6101c66004803603608081101561099557600080fd5b813591908101906040810160208201356401000000008111156109b757600080fd5b8201836020820111156109c957600080fd5b803590602001918460208302840111640100000000831117156109eb57600080fd5b91935091506001600160a01b0381351690602001356121ca565b348015610a1157600080fd5b50610220600480360360e0811015610a2857600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c00135612568565b348015610a6e57600080fd5b506108da6127c5565b348015610a8357600080fd5b5061031960048036036040811015610a9a57600080fd5b81359190810190604081016020820135640100000000811115610abc57600080fd5b820183602082011115610ace57600080fd5b80359060200191846020830284011164010000000083111715610af057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506127e9945050505050565b348015610b3a57600080fd5b506102206004803603610140811015610b5257600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135612816565b348015610bad57600080fd5b50610c036004803603610100811015610bc557600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e0013561292a565b60408051938452602084019290925282820152519081900360600190f35b610c03600480360360c0811015610c3757600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135612a66565b61031960048036036080811015610c7d57600080fd5b81359190810190604081016020820135640100000000811115610c9f57600080fd5b820183602082011115610cb157600080fd5b80359060200191846020830284011164010000000083111715610cd357600080fd5b91935091506001600160a01b038135169060200135612d0b565b6000808242811015610d34576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b610d63897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a612568565b9093509150610d7389868561309f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610dd957600080fd5b505af1158015610ded573d6000803e3d6000fd5b50505050610dfb8583613221565b50965096945050505050565b6000610e14848484613319565b949350505050565b60608142811015610e62576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686866000198101818110610e9c57fe5b905060200201356001600160a01b03166001600160a01b031614610f07576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b610f657f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061340992505050565b91508682600184510381518110610f7857fe5b60200260200101511015610fbd5760405162461bcd60e51b815260040180806020018281038252602b8152602001806146c9602b913960400191505060405180910390fd5b61105b86866000818110610fcd57fe5b905060200201356001600160a01b0316336110417f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061100f57fe5b905060200201356001600160a01b03168b8b600181811061102c57fe5b905060200201356001600160a01b0316613555565b8560008151811061104e57fe5b602002602001015161362d565b61109a8287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525030925061379f915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836001855103815181106110d957fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561111757600080fd5b505af115801561112b573d6000803e3d6000fd5b50505050611150848360018551038151811061114357fe5b6020026020010151613221565b509695505050505050565b60606111887f000000000000000000000000000000000000000000000000000000000000000084846139e5565b90505b92915050565b60008060006111c17f00000000000000000000000000000000000000000000000000000000000000008f8f613555565b90506000876111d0578c6111d4565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b15801561124a57600080fd5b505af115801561125e573d6000803e3d6000fd5b505050506112718f8f8f8f8f8f8f612568565b809450819550505050509b509b9950505050505050505050565b606081428110156112d1576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b61132f7f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061340992505050565b9150868260018451038151811061134257fe5b602002602001015110156113875760405162461bcd60e51b815260040180806020018281038252602b8152602001806146c9602b913960400191505060405180910390fd5b61139786866000818110610fcd57fe5b6111508287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061379f915050565b6060814281101561141c576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168686600019810181811061145657fe5b905060200201356001600160a01b03166001600160a01b0316146114c1576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b61151f7f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506139e592505050565b9150868260008151811061152f57fe5b60200260200101511115610fbd5760405162461bcd60e51b815260040180806020018281038252602781526020018061467c6027913960400191505060405180910390fd5b6000806115c27f00000000000000000000000000000000000000000000000000000000000000008d7f0000000000000000000000000000000000000000000000000000000000000000613555565b90506000866115d1578b6115d5565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c4810187905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b15801561164b57600080fd5b505af115801561165f573d6000803e3d6000fd5b505050506116718d8d8d8d8d8d612049565b9d9c50505050505050505050505050565b80428110156116c6576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b61173b858560008181106116d657fe5b905060200201356001600160a01b0316336117357f00000000000000000000000000000000000000000000000000000000000000008989600081811061171857fe5b905060200201356001600160a01b03168a8a600181811061102c57fe5b8a61362d565b60008585600019810181811061174d57fe5b905060200201356001600160a01b03166001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156117b257600080fd5b505afa1580156117c6573d6000803e3d6000fd5b505050506040513d60208110156117dc57600080fd5b5051604080516020888102828101820190935288825292935061181e929091899189918291850190849080828437600092019190915250889250613b1d915050565b866118d0828888600019810181811061183357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561189857600080fd5b505afa1580156118ac573d6000803e3d6000fd5b505050506040513d60208110156118c257600080fd5b50519063ffffffff613e4816565b101561190d5760405162461bcd60e51b815260040180806020018281038252602b8152602001806146c9602b913960400191505060405180910390fd5b5050505050505050565b804281101561195b576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585600019810181811061199557fe5b905060200201356001600160a01b03166001600160a01b031614611a00576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b611a10858560008181106116d657fe5b611a4e858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250613b1d915050565b604080516370a0823160e01b815230600482015290516000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015611ab857600080fd5b505afa158015611acc573d6000803e3d6000fd5b505050506040513d6020811015611ae257600080fd5b5051905086811015611b255760405162461bcd60e51b815260040180806020018281038252602b8152602001806146c9602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611b8b57600080fd5b505af1158015611b9f573d6000803e3d6000fd5b5050505061190d8482613221565b60608142811015611bf3576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110611c2a57fe5b905060200201356001600160a01b03166001600160a01b031614611c95576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b611cf37f00000000000000000000000000000000000000000000000000000000000000003488888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061340992505050565b91508682600184510381518110611d0657fe5b60200260200101511015611d4b5760405162461bcd60e51b815260040180806020018281038252602b8152602001806146c9602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110611d8757fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015611dba57600080fd5b505af1158015611dce573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb611e337f00000000000000000000000000000000000000000000000000000000000000008989600081811061171857fe5b84600081518110611e4057fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611e9757600080fd5b505af1158015611eab573d6000803e3d6000fd5b505050506040513d6020811015611ec157600080fd5b5051611ec957fe5b611f088287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061379f915050565b5095945050505050565b6000610e14848484613ea0565b60608142811015611f65576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b611fc37f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506139e592505050565b91508682600081518110611fd357fe5b602002602001015111156113875760405162461bcd60e51b815260040180806020018281038252602781526020018061467c6027913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610e14848484613f90565b6000814281101561208f576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b6120be887f00000000000000000000000000000000000000000000000000000000000000008989893089612568565b604080516370a0823160e01b8152306004820152905191945061214292508a9187916001600160a01b038416916370a0823191602480820192602092909190829003018186803b15801561211157600080fd5b505afa158015612125573d6000803e3d6000fd5b505050506040513d602081101561213b57600080fd5b505161309f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156121a857600080fd5b505af11580156121bc573d6000803e3d6000fd5b505050506111508483613221565b804281101561220e576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585600081811061224557fe5b905060200201356001600160a01b03166001600160a01b0316146122b0576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b60003490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561231057600080fd5b505af1158015612324573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb6123897f00000000000000000000000000000000000000000000000000000000000000008989600081811061171857fe5b836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156123d957600080fd5b505af11580156123ed573d6000803e3d6000fd5b505050506040513d602081101561240357600080fd5b505161240b57fe5b60008686600019810181811061241d57fe5b905060200201356001600160a01b03166001600160a01b03166370a08231866040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561248257600080fd5b505afa158015612496573d6000803e3d6000fd5b505050506040513d60208110156124ac57600080fd5b505160408051602089810282810182019093528982529293506124ee9290918a918a918291850190849080828437600092019190915250899250613b1d915050565b876118d0828989600019810181811061250357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561189857600080fd5b60008082428110156125af576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b60006125dc7f00000000000000000000000000000000000000000000000000000000000000008c8c613555565b604080516323b872dd60e01b81523360048201526001600160a01b03831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b15801561263757600080fd5b505af115801561264b573d6000803e3d6000fd5b505050506040513d602081101561266157600080fd5b5050604080517f89afcb440000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b1580156126c757600080fd5b505af11580156126db573d6000803e3d6000fd5b505050506040513d60408110156126f157600080fd5b5080516020909101519092509050600061270b8e8e61403c565b509050806001600160a01b03168e6001600160a01b03161461272e578183612731565b82825b90975095508a8710156127755760405162461bcd60e51b81526004018080602001828103825260268152602001806146a36026913960400191505060405180910390fd5b898610156127b45760405162461bcd60e51b81526004018080602001828103825260268152602001806146096026913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606111887f00000000000000000000000000000000000000000000000000000000000000008484613409565b60008060006128667f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000613555565b9050600087612875578c612879565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156128ef57600080fd5b505af1158015612903573d6000803e3d6000fd5b505050506129158e8e8e8e8e8e610ced565b909f909e509c50505050505050505050505050565b60008060008342811015612973576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b6129818c8c8c8c8c8c61411a565b909450925060006129b37f00000000000000000000000000000000000000000000000000000000000000008e8e613555565b90506129c18d33838861362d565b6129cd8c33838761362d565b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050602060405180830381600087803b158015612a2557600080fd5b505af1158015612a39573d6000803e3d6000fd5b505050506040513d6020811015612a4f57600080fd5b5051949d939c50939a509198505050505050505050565b60008060008342811015612aaf576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b612add8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c61411a565b90945092506000612b2f7f00000000000000000000000000000000000000000000000000000000000000008c7f0000000000000000000000000000000000000000000000000000000000000000613555565b9050612b3d8b33838861362d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b158015612b9857600080fd5b505af1158015612bac573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb82866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612c3157600080fd5b505af1158015612c45573d6000803e3d6000fd5b505050506040513d6020811015612c5b57600080fd5b5051612c6357fe5b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050602060405180830381600087803b158015612cbb57600080fd5b505af1158015612ccf573d6000803e3d6000fd5b505050506040513d6020811015612ce557600080fd5b5051925034841015612cfd57612cfd33853403613221565b505096509650969350505050565b60608142811015612d51576040805162461bcd60e51b8152602060048201526018602482015260008051602061474c833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110612d8857fe5b905060200201356001600160a01b03166001600160a01b031614612df3576040805162461bcd60e51b815260206004820152601d60248201527f556e69737761705632526f757465723a20494e56414c49445f50415448000000604482015290519081900360640190fd5b612e517f0000000000000000000000000000000000000000000000000000000000000000888888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506139e592505050565b91503482600081518110612e6157fe5b60200260200101511115612ea65760405162461bcd60e51b815260040180806020018281038252602781526020018061467c6027913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110612ee257fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612f1557600080fd5b505af1158015612f29573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb612f8e7f00000000000000000000000000000000000000000000000000000000000000008989600081811061171857fe5b84600081518110612f9b57fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612ff257600080fd5b505af1158015613006573d6000803e3d6000fd5b505050506040513d602081101561301c57600080fd5b505161302457fe5b6130638287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061379f915050565b8160008151811061307057fe5b6020026020010151341115611f0857611f08338360008151811061309057fe5b60200260200101513403613221565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b6020831061314a5780518252601f19909201916020918201910161312b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146131ac576040519150601f19603f3d011682016040523d82523d6000602084013e6131b1565b606091505b50915091508180156131df5750805115806131df57508080602001905160208110156131dc57600080fd5b50515b61321a5760405162461bcd60e51b815260040180806020018281038252602d8152602001806146f4602d913960400191505060405180910390fd5b5050505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b6020831061326d5780518252601f19909201916020918201910161324e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146132cf576040519150601f19603f3d011682016040523d82523d6000602084013e6132d4565b606091505b50509050806133145760405162461bcd60e51b81526004018080602001828103825260348152602001806145b06034913960400191505060405180910390fd5b505050565b60008084116133595760405162461bcd60e51b815260040180806020018281038252602b815260200180614721602b913960400191505060405180910390fd5b6000831180156133695750600082115b6133a45760405162461bcd60e51b815260040180806020018281038252602881526020018061462f6028913960400191505060405180910390fd5b60006133b8856103e563ffffffff6143c016565b905060006133cc828563ffffffff6143c016565b905060006133f2836133e6886103e863ffffffff6143c016565b9063ffffffff61442c16565b90508082816133fd57fe5b04979650505050505050565b6060600282511015613462576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561347a57600080fd5b506040519080825280602002602001820160405280156134a4578160200160208202803683370190505b50905082816000815181106134b557fe5b60200260200101818152505060005b600183510381101561354d57600080613507878685815181106134e357fe5b60200260200101518786600101815181106134fa57fe5b6020026020010151614484565b9150915061352984848151811061351a57fe5b60200260200101518383613319565b84846001018151811061353857fe5b602090810291909101015250506001016134c4565b509392505050565b6000806000613564858561403c565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f8acae03b5eca94026acbceea230a6d0b9a8da2e538b1602fe30d3dee47abae87609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106136c75780518252601f1990920191602091820191016136a8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613729576040519150601f19603f3d011682016040523d82523d6000602084013e61372e565b606091505b509150915081801561375c57508051158061375c575080806020019051602081101561375957600080fd5b50515b6137975760405162461bcd60e51b815260040180806020018281038252603181526020018061457f6031913960400191505060405180910390fd5b505050505050565b60005b60018351038110156139df576000808483815181106137bd57fe5b60200260200101518584600101815181106137d457fe5b60200260200101519150915060006137ec838361403c565b509050600087856001018151811061380057fe5b60200260200101519050600080836001600160a01b0316866001600160a01b03161461382e57826000613832565b6000835b91509150600060028a51038810613849578861388a565b61388a7f0000000000000000000000000000000000000000000000000000000000000000878c8b6002018151811061387d57fe5b6020026020010151613555565b90506138b77f00000000000000000000000000000000000000000000000000000000000000008888613555565b6001600160a01b031663022c0d9f84848460006040519080825280601f01601f1916602001820160405280156138f4576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561396557818101518382015260200161394d565b50505050905090810190601f1680156139925780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156139b457600080fd5b505af11580156139c8573d6000803e3d6000fd5b5050600190990198506137a2975050505050505050565b50505050565b6060600282511015613a3e576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff81118015613a5657600080fd5b50604051908082528060200260200182016040528015613a80578160200160208202803683370190505b5090508281600183510381518110613a9457fe5b60209081029190910101528151600019015b801561354d57600080613ad687866001860381518110613ac257fe5b60200260200101518786815181106134fa57fe5b91509150613af8848481518110613ae957fe5b60200260200101518383613ea0565b846001850381518110613b0757fe5b6020908102919091010152505060001901613aa6565b60005b600183510381101561331457600080848381518110613b3b57fe5b6020026020010151858460010181518110613b5257fe5b6020026020010151915091506000613b6a838361403c565b5090506000613b9a7f00000000000000000000000000000000000000000000000000000000000000008585613555565b9050600080600080846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613bdb57600080fd5b505afa158015613bef573d6000803e3d6000fd5b505050506040513d6060811015613c0557600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506000806001600160a01b038a811690891614613c42578284613c45565b83835b91509150613ca3828b6001600160a01b03166370a082318a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561189857600080fd5b9550613cb0868383613319565b945050505050600080856001600160a01b0316886001600160a01b031614613cda57826000613cde565b6000835b91509150600060028c51038a10613cf5578a613d29565b613d297f0000000000000000000000000000000000000000000000000000000000000000898e8d6002018151811061387d57fe5b60408051600080825260208201928390527f022c0d9f00000000000000000000000000000000000000000000000000000000835260248201878152604483018790526001600160a01b038086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015613dcc578181015183820152602001613db4565b50505050905090810190601f168015613df95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015613e1b57600080fd5b505af1158015613e2f573d6000803e3d6000fd5b50506001909b019a50613b209950505050505050505050565b8082038281111561118b576040805162461bcd60e51b815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6000808411613ee05760405162461bcd60e51b815260040180806020018281038252602c815260200180614553602c913960400191505060405180910390fd5b600083118015613ef05750600082115b613f2b5760405162461bcd60e51b815260040180806020018281038252602881526020018061462f6028913960400191505060405180910390fd5b6000613f4f6103e8613f43868863ffffffff6143c016565b9063ffffffff6143c016565b90506000613f696103e5613f43868963ffffffff613e4816565b9050613f866001828481613f7957fe5b049063ffffffff61442c16565b9695505050505050565b6000808411613fd05760405162461bcd60e51b81526004018080602001828103825260258152602001806146576025913960400191505060405180910390fd5b600083118015613fe05750600082115b61401b5760405162461bcd60e51b815260040180806020018281038252602881526020018061462f6028913960400191505060405180910390fd5b8261402c858463ffffffff6143c016565b8161403357fe5b04949350505050565b600080826001600160a01b0316846001600160a01b031614156140905760405162461bcd60e51b81526004018080602001828103825260258152602001806145e46025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b0316106140b05782846140b3565b83835b90925090506001600160a01b038216614113576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b604080517fe6a439050000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b1580156141ad57600080fd5b505afa1580156141c1573d6000803e3d6000fd5b505050506040513d60208110156141d757600080fd5b50516001600160a01b031614156142a357604080517fc9c653960000000000000000000000000000000000000000000000000000000081526001600160a01b038a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b15801561427657600080fd5b505af115801561428a573d6000803e3d6000fd5b505050506040513d60208110156142a057600080fd5b50505b6000806142d17f00000000000000000000000000000000000000000000000000000000000000008b8b614484565b915091508160001480156142e3575080155b156142f3578793508692506143b3565b6000614300898484613f90565b905087811161435357858110156143485760405162461bcd60e51b81526004018080602001828103825260268152602001806146096026913960400191505060405180910390fd5b8894509250826143b1565b6000614360898486613f90565b90508981111561436c57fe5b878110156143ab5760405162461bcd60e51b81526004018080602001828103825260268152602001806146a36026913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60008115806143db575050808202828282816143d857fe5b04145b61118b576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b8082018281101561118b576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b6000806000614493858561403c565b5090506000806144a4888888613555565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156144dc57600080fd5b505afa1580156144f0573d6000803e3d6000fd5b505050506040513d606081101561450657600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b0387811690841614614540578082614543565b81815b9099909850965050505050505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c6564556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a204558434553534956455f494e5055545f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54556e69737761705632526f757465723a20455850495245440000000000000000a264697066735822122026fbce5abd16fd617405f5a6cb4855ecc25616ef15afac292d25b2eba2c2472d64736f6c63430006060033"


     console.log(ethers)

//   // Connect to Sepolia testnet
  const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/d0CMB6hJva5y10Q6uEFP7-FKFBYcMiBD');
  const wallet = new ethers.Wallet('78d217cddc344385c3f5555253b95fcf119c1e2c5216a12e8a8aeec2dc03c52f', provider); // Replace with your private key

//   // Deploy the contract
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy("0x16883bf187DC1B1CacB875080632ef78cd3f734D","0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9");

console.log('Contract address:', contract.target);

  // Wait for the contract to be mined
  await contract.deployTransaction.wait();

  console.log('Contract deployed successfully!');
}


//0xabc0524a388830c8A572ed37B7Ae6862e257164a

deployContract().catch(error => {
  console.error('Error deploying contract:', error);
});
