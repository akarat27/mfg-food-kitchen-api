const {EntitySchema} = require('typeorm');
const FoodUsers = require('./../model/kitchenapiModel').FoodUsers;

module.exports = new EntitySchema({
    name: "FoodUsers",
    target: FoodUsers,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        username: {
            type: "varchar",
            nullable: true
        },
        password: {
            type: "varchar",
            nullable: true,
        },
        active: {
            type: "tinyint",
            nullable: true
        },
        createdDate: {
            type: "timestamp",
            nullable: true
        },
        sitegroup: {
            type: "varchar",
            nullable: true
        },
        site: {
            type: "varchar",
            nullable: true
        },
        role: {
            type: "varchar",
            nullable: true
        },
    },
    indices: [
    ]
}); 