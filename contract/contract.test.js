var Stubs = require('./contractStubs');
var DappManager = require('./contract');

let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;

Blockchain.changeTransactionAfterGet = false;

let contract = new DappManager();
contract.init();
contract.submit("{\"dappName\": \"Votestagram\", \"description\": \"this is voting platform\", \"dappWebUrl\": \"456\", \"contractAddress\": \"n1qweqwe\", \"category\": \"util\"}");
contract.submit("{\"dappName\": \"Votestagram2\", \"description\": \"this is voting platform\", \"dappWebUrl\": \"456\", \"contractAddress\": \"n1qweqwe22\", \"category\": \"util\"}");

contract.getContractAddressList().forEach(address => {
    console.log(contract.getFromContractAddress(address));
});

