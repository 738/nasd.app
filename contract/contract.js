var Stubs = require("./contractStubs");
let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;

class DappItem {
    constructor(str) {
        var obj = str ? JSON.parse(str) : {};
        this.dappName = obj.dappName || '';
        this.developer = obj.developer || '';
        this.description = obj.description || '';
        this.dappImageUrl = obj.dappImageUrl || '';
        this.dappWebUrl = obj.dappWebUrl || '';
        this.developerAddress = obj.developerAddress || '';
        this.contractAddress = obj.contractAddress || '';
        this.timestamp = obj.timestamp || '';
        this.like = obj.like || [];
        this.comment = obj.comment || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

class DappManager {
    constructor() {
        LocalContractStorage.defineMapProperty(this, "dappList", {
            parse: str => new DappItem(str),
            stringify: obj => obj.toString(),
        });
    }

    init() {

    }

    submit(dappItem) {
        var dappItemParsed = JSON.parse(dappItem);
        var { dappName, developer, description, dappImageUrl, dappWebUrl, contractAddress } = dappItemParsed;

        // error
        if (!dappName) throw new Error(`Argument Invalid: dappName is empty!`);
        if (!developer) throw new Error(`Argument Invalid: developer is empty!`);
        if (!description) throw new Error(`Argument Invalid: description is empty!`);
        if (!dappWebUrl) throw new Error(`Argument Invalid: dappWebUrl is empty!`);
        if (!contractAddress) throw new Error(`Argument Invalid: contractAddress is empty!`);
        if (this.dappList.get(contractAddress)) throw new Error(`Argument Invalid: Dapp in contractAddress(${contractAddress}) is occupied!`);

        // args
        var newDapp = new DappItem();
        newDapp.dappName = dappName;
        newDapp.developer = developer;
        newDapp.description = description;
        newDapp.dappImageUrl = dappImageUrl;
        newDapp.dappWebUrl = dappWebUrl;
        newDapp.contractAddress = contractAddress;

        // default
        newDapp.developerAddress = Blockchain.transaction.from;
        newDapp.timestamp = new Date();
        newDapp.like = [];
        newDapp.comment = [];

        // save dappItem
        this.dappList.set(contractAddress, newDapp);
        return newDapp;
    }

    get(contractAddress) {
        var dappItem = this.dappList.get(contractAddress);
        if (!dappItem) throw new Error(`Argument Invalid: dapp in contractAddress(${contractAddress}) doesn't exist!`);
        return dappItem;
    }
}

module.exports = DappManager;