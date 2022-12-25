const {EntitySchema} = require('typeorm');
const FoodOrdersStatus = require('./../model/kitchenapiModel').FoodOrdersStatus;

module.exports = new EntitySchema({
    name: "FoodOrdersStatus",
    target: FoodOrdersStatus,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        orderID: {
            type: "bigint",
            nullable: true
        },
        createdDate: {
            type: "timestamp",
            nullable: true,
        },
        processID: {
            type: "int",
            nullable: true
        },
        statusID: {
            type: "int",
            nullable: true
        },
    },
    indices: [
    ]
}); 