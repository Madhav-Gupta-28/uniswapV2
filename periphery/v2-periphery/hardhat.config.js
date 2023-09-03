/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-verify");
module.exports = {
  solidity:{
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/d0CMB6hJva5y10Q6uEFP7-FKFBYcMiBD",
      accounts:["78d217cddc344385c3f5555253b95fcf119c1e2c5216a12e8a8aeec2dc03c52f"]
    }
  },

  etherscan: {
   
    apiKey: "53ES2PKJRKUVZBC9Q3HQCD7XNNC143CSU2"
  }
};
