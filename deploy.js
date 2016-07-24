var dumbdaoContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PaymentCalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"buyer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokensBought","type":"event"}]);
var dumbdao = dumbdaoContract.new(
   {
     from: web3.eth.accounts[0],
     data: '6060604052610295806100126000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806327e235e31461004f578063d0febe4c1461007b578063f3fef3a31461008a5761004d565b005b61006560048080359060200190919050506100c1565b6040518082815260200191505060405180910390f35b61008860048050506100dc565b005b6100a96004808035906020019091908035906020019091905050610170565b60405180821515815260200191505060405180910390f35b60006000506020528060005260406000206000915090505481565b34600060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055507f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b6000600060005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054821015156101af57610002565b7f3d736c3a501a59470d4d900b17fff3dc5b497784144802493a969e99b71ff3e08383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a18273ffffffffffffffffffffffffffffffffffffffff168260405180905060006040518083038185876185025a03f192505050156102855781600060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055506001905061028f5661028e565b6000905061028f565b5b9291505056',
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

 
