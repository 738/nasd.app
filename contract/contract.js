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
        this.reviews = obj.review || [];
        this.likes = obj.like || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Review {
    constructor(str) {
        var obj = str ? JSON.parse(str) : {};
        this.reviewerAddress = obj.reviewerAddress || '';
        this.rating = obj.rating || 0;
        this.comment = obj.comment || '';
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
        newDapp.reviews = [];
        newDapp.likes = [];

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

    writeReview(contractAddress, review) {
        var reviewParsed = JSON.parse(review);
        var { rating, comment } = reviewParsed;

        // error
        if (!rating) throw new Error(`Argument Invalid: rating of review is empty!`);
        if (!comment) throw new Error(`Argument Invalid: comment of review is empty!`);

        reviewParsed['reviewerAddress'] = Blockchain.transaction.from;
        var dappItem = this.getFromContractAddress(contractAddress);
        dappItem.reviews.push(reviewParsed);
        this.dappList.set(contractAddress, dappItem);
        return reviewParsed;
    }
}

module.exports = DappManager;