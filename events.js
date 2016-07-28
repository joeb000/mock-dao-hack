
var payoutEvent = dumbdao.PaymentCalled();
payoutEvent.watch(function(error, result){
    if (!error){
      console.log("*******************************************************");
      console.log("ID:" + result.args.payee + " paid out: " + result.args.amount);
      console.log("*******************************************************");
    }
    else {
      console.log("oops something went wrong...")
    }
});

var buyEvent = dumbdao.TokensBought();
buyEvent.watch(function(error, result){
    if (!error){
      console.log("*******************************************************************************");
      console.log("ID:" + result.args.buyer + " bought: " + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});

var buyEvent = dumbdao.TokensTransfered();
buyEvent.watch(function(error, result){
    if (!error){
      console.log("*******************************************************************************");
      console.log("Tokens transfered from:" + result.args.from + " to: " + result.args.to+ " amount:" + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});

var insuff = dumbdao.InsufficientFunds();
insuff.watch(function(error, result){
    if (!error){
      console.log("*******************************************************************************");
      console.log("Inssufficent Funds Bal:" + result.args.bal +  " amount tried:" + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});


var attackEvent = attacker.DefaultFunc();
attackEvent.watch(function(error, result){
    if (!error){
      console.log("*******************************************************************************");
      console.log("Default func called from:" + result.args.caller + " amount: " + result.args.amount + " wei");
      console.log("NUM:" + result.args.num + "BAL:" +  result.args.daoBalance);
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});
