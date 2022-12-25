const helper = require('./../../config/helper');
const moment = require('moment');
const {getConnection ,getRepository,IsNull,Not,Between,getManager } = require('typeorm');
const tbl = require('./tbl');
const { FoodSites } = require('../model/kitchenapiModel');
const logger = require('../../config/winston')(__filename);
const { addDays, subDays } = require('date-fns');


// const { PizzaMapping } = require('../model/grabapiModel');

// const GrabOrders = require('../model/grabapiModel').GrabOrders;


/**
 * FoodSites 
 */
const getFoodSites = async() => {
    let food_sites = await getConnection().getRepository(FoodSites).find()
    return food_sites;
}
const getFoodSitesBysitegroup = async(sitegroup) => {
    let food_sites = await getConnection().getRepository(FoodSites).findOne({sitegroup: sitegroup})
    return food_sites;
}
// const getCcWebItmByItemId = async(item_id) => {
//     return await getConnection().getRepository(CcWebItm).findOne({ item_id: item_id })
// }
// const getCcWebItmById = async(id) => {
//     return await getConnection().getRepository(CcWebItm).findOne(id)
// }
// const saveCcWebItm = async(webItem) => {
//     return await getConnection().getRepository(CcWebItm).save(webItem)
// }
// const deleteCcWebItm = async(id) => {
//     return await getConnection().getRepository(CcWebItm).delete(id)
// }


module.exports = {
    getFoodSites,getFoodSitesBysitegroup,
   
}
