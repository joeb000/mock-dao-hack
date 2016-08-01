# mock-dao-hack
I wanted to recreate a recurisive send exploit similar to the one used by an attacker to drain "The DAO". I wrote an extremely simplified DAO contract (`dumbDAO.sol`) which is vulnerable to this hack. Included is an attacker contract (`attacker.sol`) which, if executed correctly will drain the dumbDAO contract of its ether.

#Running the exploit
Spin up a new geth node and console on the testnet or a privatenet (would not recommend trying this on the main Ethereum blockchain for obvious reasons). I've included a shell script called `compile_solidity.sh` which you can use to automatically compile the solidity contract code and create a deployment javascript file for you to load into your console.

    ./compile_solidity.sh dumbDAO.sol

If this runs correctly it should output a `loadScript` function call with the directory to the deployment js file to run as a parameter:

    loadScript('/Path/to/your/ws/mock-dao-hack/contracts/deploy_dumbDAO.js');

You should be able to copy and paste this straight into your geth console to deploy the contract. Once it is mined you'll see a log message confirming that the contract mined correctly. The contract javascript var is its all lowercase name (`dumbdao`). Deploy both contracts (doesn't really matter what order).

Once they are both deployed, lets set a few things up before executing the exploit...
Optional: run the event listener javascript file - sometimes its helpful to have feedback on the javascript console about which events are runnning:

        loadScript('/Path/to/your/ws/mock-dao-hack/events.js');

First, buy some DAO tokens as an innocent investor (adjust `eth.accounts[0]` as necessary).

    //buy 100 ether worth of DAO tokens
    dumbdao.buyTokens({from:eth.accounts[0],value:web3.toWei(100),gas:3000000});

    //After that transaction has been mined, check to make sure the tokens were appropriately assigned
    web3.fromWei(dumbdao.balances(eth.accounts[0]));
    //and check on the balance of the contract itself
    web3.fromWei(eth.getBalance(dumbdao.address));

Next lets prepare the attacker contract:

    attacker.setDAOAddress(dumbdao.address,{from:eth.accounts[0],gas:3000000});
    attacker.fundMe({from:eth.accounts[0],value:web3.toWei(5),gas:3000000});
    attacker.buyDAOTokens(web3.toWei(5),{from:eth.accounts[0],gas:4000000});

    //check Token balance for attacker
    web3.fromWei(dumbdao.balances(attacker.address));

The attacker contract should now be a token holder with 5 ether worth of DAO tokens. To execute the exploit...

    attacker.stealEth(web3.toWei(5),{from:eth.coinbase,gas:4000000})

Check the balances of both contracts as well as the balances of the innocent investor...the DAO now has less ether than it thinks it has.


#DAO Attack - Part 2
To pull off the DAO hack, the attacker used a combination of the recursive/reentrant call attack and another exploit. This second attack consisted of the attacker transfering his DAO tokens to a different address as the last step of his recursive eploit. After the recurive attack ends and the DAO tries to update the attacker's DAO token balance which is now already 0 because of the transfer. The attacker is now free to transfer the tokens back into the attacker contract and run the exploit again.

#Further reading
DAO Hack FAQ:
https://www.reddit.com/r/ethereum/comments/4os7l5/the_big_thedao_heist_faq/

In depth Analysis:
http://vessenes.com/deconstructing-thedao-attack-a-brief-code-tour/

http://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/

https://pdaian.com/blog/chasing-the-dao-attackers-wake/
