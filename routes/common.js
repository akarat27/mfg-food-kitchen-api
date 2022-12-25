var express = require('express');
var router = express.Router();

router.get('/healthcheck', function(req ,res, next){

    res.send(JSON.stringify({"status":"ok"}));
})


module.exports = router;