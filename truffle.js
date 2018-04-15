module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  network: {
    development: {
      host: "localhost",
      port: 8545,       // default port of ganache-cli
      network_id: "*"   // Match any network id
    }
  }
};
