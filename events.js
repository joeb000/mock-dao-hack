
var payoutEvent = dumbDAO.PaymentCalled();
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

var buyEvent = dumbDAO.TokensBought();
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

var buyEvent = dumbDAO.TokensTransfered();
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


var attackEvent = attack.DefaultFunc();
attackEvent.watch(function(error, result){
    if (!error){
      console.log("*******************************************************************************");
      console.log("Default func called from:" + result.args.caller + " amount: " + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});
