contract dumbDAO {

  event PaymentCalled(address payee, uint amount);
  event TokensBought(address buyer, uint amount);

  mapping (address => uint) public balances;

  function buyTokens(){
    balances[msg.sender] += msg.value;
    TokensBought(msg.sender, msg.value);
  }

  function withdraw(address _recipient, uint _amount) returns (bool) {
    if (_amount >= balances[msg.sender])
    throw;
    PaymentCalled(_recipient, _amount);
    if (_recipient.call.value(_amount)()) {
        balances[msg.sender] -= _amount;
        return true;
    } else {
        return false;
    }
  }

}
