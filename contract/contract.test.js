var Stubs = require('./contractStubs');
var DappManager = require('./contract');

let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;

Blockchain.changeTransactionAfterGet = false;

let contract = new DappManager();
contract.init();
contract.submit("{\"id\": \"123\", \"dappName\": \"Votestagram\", \"developer\": \"Jon Jee\", \"description\": \"this is voting platform\", \"dappImageUrl\": \"123123\", \"dappWebUrl\": \"456\", \"contractAddress\": \"n1qweqwe\"}");

console.log(contract.get("123"));

