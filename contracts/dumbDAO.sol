contract dumbDAO {

  event PaymentCalled(address payee, uint amount);
  event TokensBought(address buyer, uint amount);
  event TokensTransfered(address from, address to, uint amount);
  event InsufficientFunds(uint bal, uint amount);


  mapping (address => uint) public balances;

  function buyTokens(){
    balances[msg.sender] += msg.value;
    TokensBought(msg.sender, msg.value);
  }

  function transferTokens(address _to, uint _amount){
    if (balances[msg.sender] < _amount)
      throw;
    balances[_to]=_amount;
    balances[msg.sender]-=_amount;
    TokensTransfered(msg.sender, _to, _amount);
  }

  function withdraw(address _recipient, uint _amount) returns (bool) {
    if (balances[msg.sender] < _amount){
        InsufficientFunds(balances[msg.sender], _amount);
        throw;
    }
    PaymentCalled(_recipient, _amount);
    if (_recipient.call.value(_amount)()) {
        balances[msg.sender] -= _amount;
        return true;
    }
  }

}
