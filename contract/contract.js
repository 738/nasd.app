var Stubs = require("./contractStubs");
let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;

class DappItem {
    constructor(str) {
        var obj = str ? JSON.parse(str) : {};
        this.dappName = obj.dappName || '';
        this.description = obj.description || '';
        this.dappWebUrl = obj.dappWebUrl || '';
        this.developerAddress = obj.developerAddress || '';
        this.contractAddress = obj.contractAddress || '';
        this.category = obj.category || '';
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
        LocalContractStorage.defineProperty(this, "contractAddressList");
        LocalContractStorage.defineMapProperty(this, "dappList", {
            parse: str => new DappItem(str),
            stringify: obj => obj.toString(),
        });
    }

    init() {
        this.contractAddressList = [];
    }

    submit(dappItem) {
        var dappItemParsed = JSON.parse(dappItem);
        var { dappName, description, dappWebUrl, contractAddress, category } = dappItemParsed;

        // error
        if (!dappName) throw new Error(`Argument Invalid: dappName is empty!`);
        if (!description) throw new Error(`Argument Invalid: description is empty!`);
        if (!dappWebUrl) throw new Error(`Argument Invalid: dappWebUrl is empty!`);
        if (!contractAddress) throw new Error(`Argument Invalid: contractAddress is empty!`);
        if (this.dappList.get(contractAddress)) throw new Error(`Argument Invalid: Dapp in contractAddress(${contractAddress}) is occupied!`);

        // args
        var newDapp = new DappItem();
        newDapp.dappName = dappName;
        newDapp.description = description;
        newDapp.dappWebUrl = dappWebUrl;
        newDapp.contractAddress = contractAddress;
        newDapp.category = category || "Others";

        // default
        newDapp.developerAddress = Blockchain.transaction.from;
        newDapp.timestamp = new Date();
        newDapp.like = [];
        newDapp.comment = [];

        // save dappItem
        this.contractAddressList.push(contractAddress);
        this.dappList.set(contractAddress, newDapp);
        return newDapp;
    }

    getFromContractAddress(contractAddress) {
        var dappItem = this.dappList.get(contractAddress);
        if (!dappItem) throw new Error(`Argument Invalid: dapp in contractAddress(${contractAddress}) doesn't exist!`);
        return dappItem;
    }

    getContractAddressList() {
        return this.contractAddressList;
    }
}

module.exports = DappManager;