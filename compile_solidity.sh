#!/bin/sh

SOLCFILENAME=`basename $1`
SOLCFILEPATH=`dirname $1`
cd $SOLCFILEPATH
SOLCFILEPATH=`pwd`
cd $SOLCFILEPATH/..

mkdir -p deploy
WORKING_DIR=`pwd`/deploy
CONTRACT_EXT="${SOLCFILENAME#*.}"
CONTRACT_EXACT_NAME=`echo ${SOLCFILENAME%.*}`
CONTRACT_NAME=`echo ${SOLCFILENAME%.*} | tr '[:upper:]' '[:lower:]'`
DEPLOY_SCRIPT=$WORKING_DIR/deploy_$CONTRACT_NAME.js

cd $SOLCFILEPATH

solc --bin -o $WORKING_DIR/tmp $SOLCFILENAME
solc --abi -o $WORKING_DIR/tmp $SOLCFILENAME

#TODO - WORK IN PROGRESS
################################################
name=`awk "/function ${CONTRACT_EXACT_NAME}\(/ {print}" $SOLCFILENAME`
echo "name:"
echo $name
conregex="\((.*)\)"
if [[ $name =~ $conregex ]];
  then conArgs=${BASH_REMATCH[1]};
fi

echo "con args"
echo $conArgs

#echo $conArgs | awk -F',' '{print $1}'
argNumber=`echo $conArgs | awk -F',' '{ for(i = 1; i <= NF; i++) { print $i; max=$i } }' | wc -l`
echo $argNumber
for (( i = 1; i <= $argNumber; i++ )); do
  echo "hello"
  echo $conArgs | awk -F',' "{print \$$i}"
done
################################################


echo " " > $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
printf "%s" "var ${CONTRACT_NAME}Contract = web3.eth.contract(" >> $DEPLOY_SCRIPT
printf "%s" `cat $WORKING_DIR/tmp/$CONTRACT_NAME.abi` >> $DEPLOY_SCRIPT
printf "%s" ");" >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
printf "%s" "var gasEstimate = web3.eth.estimateGas({ from: web3.eth.accounts[0], data:'" >> $DEPLOY_SCRIPT
printf "%s" `cat $WORKING_DIR/tmp/$CONTRACT_NAME.bin` >> $DEPLOY_SCRIPT
printf "%s" "' })" >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
echo " " >> $DEPLOY_SCRIPT
#TODO - add support for constructor
printf "%s" "var ${CONTRACT_NAME} = ${CONTRACT_NAME}Contract.new({" >> $DEPLOY_SCRIPT
printf "%s" " from: web3.eth.accounts[0]," >> $DEPLOY_SCRIPT
printf "%s" " data: '" >> $DEPLOY_SCRIPT
printf "%s" `cat $WORKING_DIR/tmp/$CONTRACT_NAME.bin` >> $DEPLOY_SCRIPT
printf "%s" "', gas: gasEstimate  }, function (e, contract){" >> $DEPLOY_SCRIPT
printf "%s" "    console.log(e, contract);" >> $DEPLOY_SCRIPT
printf "%s" " if (typeof contract.address !== 'undefined') {" >> $DEPLOY_SCRIPT
printf "%s" " console.log('Deployed Contract ${CONTRACT_NAME} mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);}})" >> $DEPLOY_SCRIPT

rm -rf $WORKING_DIR/tmp

echo " "
echo "loadScript('$DEPLOY_SCRIPT');"
echo " "
