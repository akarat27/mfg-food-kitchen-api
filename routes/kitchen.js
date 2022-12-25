var express = require('express');
var router = express.Router();
var moment = require('moment');
var {formatJSON , formatJSONWrap ,printText ,isUndefined ,isNull} = require('./../config/helper')
var {process,status} = require('./../config/status');
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const dbservice = require('./../database/services/dbservice');
const FoodSites = require('./../database/model/kitchenapiModel').FoodSites;

router.get('/sites', async function(req ,res, next){
    //let food_sites = new FoodSites();
    let row_food_sites = await dbservice.getFoodSites()
    res.send(JSON.stringify(row_food_sites));
})




module.exports = router;