
var payoutEvent = myContract.PaymentCalled();


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


var buyEvent = myContract.TokensBought();
buyEvent.watch(function(error, result){
    if (!error){
      var theLat=result.args.latitude/1000000;
      var theLong=result.args.longitude/1000000;
      console.log("*******************************************************************************");
      console.log("ID:" + result.args.buyer + " bought: " + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});

var attackEvent = myAttack.DefaultFunc();
attackEvent.watch(function(error, result){
    if (!error){
      var theLat=result.args.latitude/1000000;
      var theLong=result.args.longitude/1000000;
      console.log("*******************************************************************************");
      console.log("Caller:" + result.args.caller + " amount: " + result.args.amount + " wei");
      console.log("*********************************************************************************");
    }
    else {
      console.log("oops something went wrong...");
    }
});
//console.log("about to call some police functions")
//loadScript('/Users/joeb/Desktop/IDEO/GUN/javascript/police.js')
