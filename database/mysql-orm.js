const {createConnection} = require('typeorm');
const logger = require('./../config/winston')(__filename)
const baseconfig = require('./../config/config')
const moment = require('moment');
const dbservice = require('./services/dbservice');
const config = require('./../config/config');

var mysql_orm_is_on = 0;

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
        require("./entity/FoodOrders"),
        require("./entity/FoodOrdersStaus"),
        require("./entity/FoodProcessConfiguration"),
        require("./entity/FoodSites"),
        require("./entity/FoodUsers")
    ],
    synchronize: false,
    ssl  : {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
      }
    // ssl: true
}

console.log('[LOADING DATABASE] datbase configuration ')
console.log(connectionConfig)

createConnection(connectionConfig)
.then((connection) => {
    console.log('[ORM] connection connected');
    console.log(JSON.stringify(connectionConfig))
    console.log('[ORM] entiry mapped');
    connection.entityMetadatas.forEach(entity => {
        console.log('[ORM]'+'TableName = '+ entity.tableName +', name = '+entity.name); 
        //propertiesMap:
    })
    // console.log('Test applied item'); 
    // var neworder = require('./../routes/grab/flow/neworder');
    // neworder.appliedItems('SG_SZ','93852316-CZMFCU3EEJVBEN');

    mysql_orm_is_on = 1;
    console.log('[ORM] mysql_orm_is_on ='+ mysql_orm_is_on);

    // /**
    //  * LOADING PROMISE URL
    //  */
    // dbservice.getSystemConfigByChannel('promiseurl','grab')
    // .then(systemconfig => {
    //     config.promise_url = systemconfig.value
    //     console.log('**[System Configuration]  promise_url ' + config.promise_url);

    //     /**** Checking BC Interface ******/
    //     console.log('**[Calling] ' + config.promise_url);

    //     const axios = require('axios').default;

    //     axios.get(config.promise_url + '/getbranchinfo',{
    //         headers: {'Storeid': 52000}
    //     })
    //     .then(json => {
    //         console.log("return from /getbranchinfo");
    //         console.log(json.data);
    //     })
    //     .catch(err => {
    //         console.log('getbranchinfo 52000 Error =>');
    //         console.log(err);
    //     })

    // })
    // .catch( err => {
    //     console.log('getSystemConfig Error =>');
    //     console.log(err);
    // })


    // /**
    //  * LOADING AMQ URL
    //  */
    // if(config.env.toLowerCase() !== 'production'){
    //     dbservice.getSystemConfigByChannel('rabbitmq_url','grab')
    //     .then(systemconfig => {
    //         config.rabbitmq_url = systemconfig.value
    //         console.log('**[System Configuration]  rabbitmq_url ' + config.rabbitmq_url);
    //     })
    //     .catch( err => {
    //         console.log('getSystemConfig Error =>');
    //         console.log(err);
    //     })
    // }

    // /**
    //  * LOADING PREFETCH
    //  */
    //  dbservice.getSystemConfigByChannel('rabbitmq_prefetch','grab')
    //  .then(systemconfig => {
    //      config.prefetch = systemconfig.value
    //      console.log('**[System Configuration]  rabbit_prefetch ' + config.prefetch);
    //  })
    //  .catch( err => {
    //      console.log('getSystemConfig Error =>');
    //      console.log(err);
    //  })

    // /**
    //  * LOADING DEBUG
    //  */
    // dbservice.getSystemConfigByChannel('debug','grab')
    // .then(systemconfig => {
    //     config.debug = systemconfig.active
    //     console.log('**[System Configuration]  debug ' + config.debug);
    // })
    // .catch( err => {
    //     console.log('getSystemConfig Error =>');
    //     console.log(err);
    // })
    
})
.catch((conErr) => {
    console.log('[TYPEORM_DB_CONNECTION_ERROR] Error of ')
    console.log(conErr)
})


const databaseIsOn = function() {
    if(mysql_orm_is_on === 1){
        return true;
    }else{
        return false;
    }
};

module.exports = {databaseIsOn};