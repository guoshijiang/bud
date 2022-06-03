require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "KE3V4NLUN3fgvie0lbTHyQ8Q2zSSnfo2";
const ETHERSCAN_API_KEY = "TNSTBJQHXQV8FJDC8BXEYCQXJP39TJ3U7U"
const ROPSTEN_PRIVATE_KEY = "a1724a3be3134c9e64d9243428926088c1f4a236e777c19e3c7a974e0da6dba3";


module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    version: '0.8.1',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/1e6e5dce00ac44caba42be9896b8f226`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/1e6e5dce00ac44caba42be9896b8f226`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/b48b6387e66d4f3497245873747f6e4d`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
    bsctest: {
      url: `https://data-seed-prebsc-2-s3.binance.org:8545`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
    teletest: {
      url: `https://evm-rpc.testnet.teleport.network`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
    hecotest: {
      url: `https://http-testnet.hecochain.com`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },
  },
  etherscan: {
     // apiKey: "W972DC11QYVEWRSWCRYHTT4H362PK43P8N",  // etherscan
     apiKey: "GYBDAK1Z1SJ9FN24W3H9B6AV6YGN4BJ1TV",     // heco
  }
};