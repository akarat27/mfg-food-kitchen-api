const moment = require('moment');
const helper = require('../../config/helper');
var logger = require("./../../config/winston")(__filename);
// const GrabOrders = require('../model/grabapiModel').GrabOrders;


// const newGrabOrders = (fromReq,grabState,site_group) => {
//     let grabOrders = new GrabOrders();
//     grabOrders.grab_order_id    = fromReq["orderID"];
//     grabOrders.grab_merchant_id = fromReq["merchantID"];
//     grabOrders.store_merchant_id = fromReq["partnerMerchantID"];
//     //logger.info(fromReq["orderTime"] +' => '+ moment(fromReq["orderTime"],'YYYY-MM-DDTHH:mm:ssZ').format('YYYY-MM-DD HH:mm:ss'));
//     //moment(fromReq["orderTime"],'YYYY-MM-DDTHH:mm:ssZ').format('YYYY-MM-DD HH:mm:ss'); //fromReq["orderTime"];
//     //logger.info(fromReq["orderTime"]);
//     if(!helper.isNullEmptry(fromReq["scheduledTime"]) && site_group === 'TH_BC'){
//        //Has scheduledTime that is future
//         grabOrders.order_time = moment().utc().format('YYYY-MM-DDTHH:mm:ssZ');
//     }else{
//         grabOrders.order_time = fromReq["orderTime"];
//     }
    
//     //logger.info(grabOrders.order_time);
//     grabOrders.payment_type = fromReq["paymentType"];
//     grabOrders.stort_order_number = fromReq["shortOrderNumber"];
//     grabOrders.currency_code = fromReq["currency"]["code"];
//     grabOrders.currency_symbol = fromReq["currency"]["symbol"];
//     grabOrders.currency_exponent = fromReq["currency"]["exponent"];
//     grabOrders.cutlery = fromReq["cutlery"];
//     grabOrders.json_items = fromReq["items"]; //JSON.stringify(fromReq["items"]);
//     grabOrders.price_subtotal = fromReq["price"]["subtotal"];
//     grabOrders.price_tax = fromReq["price"]["tax"];
//     grabOrders.price_delivery_fee = fromReq["price"]["deliveryFee"];
//     grabOrders.price_eater_payment= fromReq["price"]["eaterPayment"];
//     grabOrders.price_grabfund_promo = fromReq["price"]["grabFundPromo"];
//     grabOrders.price_minorfund_promo = fromReq["price"]["merchantFundPromo"];
//     grabOrders.grab_order_state = grabState;
//     grabOrders.site_group = site_group;
//     grabOrders.store_name = fromReq["storeName"]; //Custom attribute from grab request
//     return {...grabOrders}
// }

// const grabSiteRequest = (request) => {
//     let grabSites = new GrabSites(request.id, request.grab_merchant_id, request.platform, 
//         request.store_merchant_id, request.store_name, request.store_address, 
//         request.bu_code, request.site_group, request.active);
//     return {...grabSites}
// }

module.exports = {
    //newGrabOrders, grabSiteRequest
}