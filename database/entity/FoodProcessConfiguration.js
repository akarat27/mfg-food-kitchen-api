const {EntitySchema} = require('typeorm');
const FoodProcessConfiguration = require('./../model/kitchenapiModel').FoodProcessConfiguration;

module.exports = new EntitySchema({
    name: "FoodProcessConfiguration",
    target: FoodProcessConfiguration,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        name: {
            type: "varchar",
            nullable: true
        },
        active: {
            type: "tinyint",
            nullable: true
        }
    },
    indices: [
    ]
}); 