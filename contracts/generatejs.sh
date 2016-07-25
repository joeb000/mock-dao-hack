#!/bin/sh

CONTRACT_EXT="${1#*.}"
CONTRACT_NAME="${1%.*}"
WORKING_DIR=`pwd`
DEPLOY_SCRIPT=$WORKING_DIR/deploy_$CONTRACT_NAME.js

solc --bin -o tmp ./$1
solc --abi -o tmp ./$1

printf "%s" "var ${CONTRACT_NAME}Contract = web3.eth.contract(" > $DEPLOY_SCRIPT
printf "%s" `cat ./tmp/$CONTRACT_NAME.abi` >> $DEPLOY_SCRIPT
printf "%s" ");" >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT

printf "%s" "var ${CONTRACT_NAME}Contract = web3.eth.contract(" > $DEPLOY_SCRIPT
printf "%s" `cat ./tmp/$CONTRACT_NAME.abi` >> $DEPLOY_SCRIPT
printf "%s" ");" >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT

printf "%s" "var ${CONTRACT_NAME} = ${CONTRACT_NAME}Contract.new({" >> $DEPLOY_SCRIPT
printf "%s" " from: web3.eth.accounts[0]," >> $DEPLOY_SCRIPT
printf "%s" " data: '" >> $DEPLOY_SCRIPT
printf "%s" `cat ./tmp/$CONTRACT_NAME.bin` >> $DEPLOY_SCRIPT
printf "%s" "', gas: 4700000  }, function (e, contract){" >> $DEPLOY_SCRIPT
printf "%s" "    console.log(e, contract);" >> $DEPLOY_SCRIPT
printf "%s" " if (typeof contract.address !== 'undefined') {" >> $DEPLOY_SCRIPT
printf "%s" " console.log('Deployed Contract ${CONTRACT_NAME} mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);}})" >> $DEPLOY_SCRIPT

echo " "
echo " "
echo "loadScript('$DEPLOY_SCRIPT');"
echo " "
echo " "
