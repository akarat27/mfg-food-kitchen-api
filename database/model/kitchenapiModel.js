const moment = require('moment');
const helper = require('./../../config/helper');

class FoodOrders {
    constructor(id, addressID, areaID, storeID, storeName, storeNumber,orderMode,orderName,orderType
        ,tranDate,dueDate,customerID,grossTotal,discountTotal,refID,transactionBy,createdDate,json
        ,site,status,entries,cookingFinishTime,pickupFinishTime,cancelTime) {
        this.id = id;
        this.addressID = addressID;
        this.areaID = areaID;
        this.storeID = storeID;
        this.storeName = storeName;
        this.storeNumber = storeNumber;
        this.orderMode = orderMode;
        this.orderName = orderName;
        this.orderType = orderType;
        this.tranDate = tranDate;
        this.dueDate = dueDate;
        this.customerID = customerID;
        this.grossTotal = grossTotal;
        this.discountTotal = discountTotal;
        this.refID = refID;
        this.transactionBy = transactionBy;
        this.createdDate = createdDate;
        this.json = json;
        this.site = site;
        this.status = status;
        this.entries = entries;
        this.cookingFinishTime = cookingFinishTime;
        this.pickupFinishTime = pickupFinishTime;
        this.cancelTime = cancelTime;
    }
}

class FoodOrdersStatus {
    constructor(id, orderID, createdDate,processID,statusID
    ){
        this.id = id;
        this.orderID = orderID;
        this.createdDate = createdDate;
        this.processID = processID;
        this.statusID = statusID;
    }
}

class FoodProcessConfiguration {
    constructor(id, name, active
    ){
        this.id = id;
        this.name = name;
        this.active = active;
    }
}

class FoodSites {
    constructor(id, sitegroup, siteID,siteNumber,siteName
    ){
        this.id = id;
        this.sitegroup = sitegroup;
        this.siteID = siteID;
        this.siteNumber = siteNumber;
        this.siteName = siteName;
    }
}

class FoodUsers {
    constructor(id, username, password,active,createdDate,sitegroup,site,role
    ){
        this.id = id;
        this.username = username;
        this.password = password;
        this.active = active;
        this.createdDate = createdDate;
        this.sitegroup = sitegroup;
        this.site = site;
        this.role = role;
    }
}

module.exports = {
    FoodOrders: FoodOrders,
    FoodOrdersStatus: FoodOrdersStatus,
    FoodProcessConfiguration: FoodProcessConfiguration,
    FoodOrdersStatus: FoodOrdersStatus,
    FoodSites: FoodSites,
    FoodUsers: FoodUsers
}