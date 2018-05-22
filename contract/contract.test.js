var Stubs = require('./contractStubs');
var DappManager = require('./contract');

let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;

Blockchain.changeTransactionAfterGet = false;

let contract = new DappManager();
contract.init();
contract.submit("{\"dappName\": \"Votestagram\", \"developer\": \"Jon Jee\", \"description\": \"this is voting platform\", \"dappImageUrl\": \"123123\", \"dappWebUrl\": \"456\", \"contractAddress\": \"n1qweqwe\", \"category\": \"util\"}");
contract.submit("{\"dappName\": \"Votestagram2\", \"developer\": \"Jon Jee\", \"description\": \"this is voting platform\", \"dappImageUrl\": \"123123\", \"dappWebUrl\": \"456\", \"contractAddress\": \"n1qweqwe22\", \"category\": \"util\"}");

contract.getContractAddressList().forEach(address => {
    console.log(contract.getFromContractAddress(address));
});

