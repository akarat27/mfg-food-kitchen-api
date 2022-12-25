const {EntitySchema} = require('typeorm');
const FoodOrders = require('./../model/kitchenapiModel').FoodOrders;

module.exports = new EntitySchema({
    name: "FoodOrders",
    target: FoodOrders,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        addressID: {
            type: "varchar",
            nullable: true
        },
        areaID: {
            type: "varchar",
            nullable: true
        },
        storeID: {
            type: "varchar",
            nullable: true
        },
        storeName: {
            type: "varchar",
            nullable: true
        },
        storeNumber: {
            type: "varchar",
            nullable: true
        },
        orderMode: {
            type: "int",
            nullable: true
        },
        orderName: {
            type: "varchar",
            nullable: true
        },
        orderType: {
            type: "int",
            nullable: true
        },
        tranDate: {
            type: "timestamp",
            nullable: true,
            // default: () => "CURRENT_TIMESTAMP",
            // transformer: {
            //     to: (value) => { 
            //         if((String(value)).includes('T')){
            //            //console.log('UTC Transform to', value);
            //            return value;
            //         }else{
            //            let temp = moment(value, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DDTHH:mm:ssZ'); 
            //            //console.log('Local Transform to', temp);
            //            return temp;
            //         }
            //     },
            //     from: (value) => {
            //         //console.log('Transform from', value);
            //         //2020-08-02T21:44:32.000Z
            //         if((String(value)).includes('T')){
            //             let temp = moment(value).format('YYYY-MM-DD HH:mm:ss');
            //             //console.log('UTC Transform from', temp);
            //             return temp;
            //         }else{
            //             //console.log('Local Transform from', value);
            //             return value;
            //         }
                    
            //     },
            // }
        },
        dueDate: {
            type: "timestamp",
            nullable: true,
        },
        customerID: {
            type: "varchar",
            nullable: true
        },
        grossTotal: {
            type: "decimal",
            nullable: true
        },
        discountTotal: {
            type: "decimal",
            nullable: true
        },
        refID: {
            type: "varchar",
            nullable: true
        },
        transactionBy: {
            type: "varchar",
            nullable: true
        },
        createdDate: {
            type: "timestamp",
            nullable: true,
        },
        json: {
            type: "json",
            nullable: true
        },
        site: {
            type: "varchar",
            nullable: true
        },
        status: {
            type: "varchar",
            nullable: true
        },
        entries: {
            type: "json",
            nullable: true
        },
        cookingFinishTime: {
            type: "timestamp",
            nullable: true,
        },
        pickupFinishTime: {
            type: "timestamp",
            nullable: true,
        },
        cancelTime: {
            type: "timestamp",
            nullable: true,
        },
    },
    indices: [
    ]
}); 
