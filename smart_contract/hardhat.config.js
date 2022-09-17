// https://eth-mainnet.g.alchemy.com/v2/CH_ObmGVd-o_02ZW6jryFFrr3GmdbWPi
// https://eth-mainnet.g.alchemy.com/v2/CH_ObmGVd-o_02ZW6jryFFrr3GmdbWPi

require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/i6ZwIBFST6cum3LPf7otF1g0KkspOdia",
      accounts: ["0f62e31b472f1a502786478ae952cfb9ab2eabf011e56b60d10d970a145dd020"],
    },
  },
};
