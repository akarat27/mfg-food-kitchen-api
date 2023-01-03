var express = require('express');
var router = express.Router();

router.get('/healthcheck', function(req ,res, next){

    res.send(JSON.stringify({"status":"ok"}));
})

router.get('/dbconnect', function(req ,res, next){

    const {createConnection} = require('typeorm');
    const baseconfig = require('./../config/config')
    const connectionConfig = {
        type: "mysql",// "mariadb",
        charset: 'utf8mb4',
        //timezone : '+07:00',
        connectTimeout: 30000,//120000,
        host     : baseconfig.mysql_host, //process.env.DB_HOST,
        port     : baseconfig.mysql_port,
        username : baseconfig.mysql_user,
        password : baseconfig.mysql_password,
        database : baseconfig.mysql_database,
        entities: [
            //"entity/*.js" // <============= check if this is correct and our entities are on this path
            require("./../database/entity/FoodOrders"),
            require("./../database/entity/FoodOrdersStaus"),
            require("./../database/entity/FoodProcessConfiguration"),
            require("./../database/entity/FoodSites"),
            require("./../database/entity/FoodUsers")
        ],
        synchronize: false,
        ssl  : {
            // DO NOT DO THIS
            // set up your ca correctly to trust the connection
            rejectUnauthorized: false
          }
        // ssl: true
    }

    createConnection(connectionConfig)
    .then((connection) => {
        res.send(JSON.stringify(connection));
    }).catch((conErr) => {
        console.log('[TYPEORM_DB_CONNECTION_ERROR] Error of ')
        //console.log(conErr)
        res.send(JSON.stringify(conErr));
    })
    
})


module.exports = router;