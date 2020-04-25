var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.json({"Find the Character": "Yoda"})
})

module.exports = router;