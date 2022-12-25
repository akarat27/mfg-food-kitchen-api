const {EntitySchema} = require('typeorm');
const FoodSites = require('./../model/kitchenapiModel').FoodSites;

module.exports = new EntitySchema({
    name: "FoodSites",
    target: FoodSites,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        sitegroup: {
            type: "varchar",
            nullable: true
        },
        siteID: {
            type: "varchar",
            nullable: true,
        },
        siteNumber: {
            type: "varchar",
            nullable: true
        },
        siteName: {
            type: "varchar",
            nullable: true
        },
    },
    indices: [
    ]
}); 