const express = require('express');
const router = express.Router();
const Character = require('../models/character')


router.get('/', function(req, res, next){
    Character.find()
        .then(char => {
            res.send(char)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.post('/', function(req, res, next){
    console.log(req.name)
    res.redirect('/')
})

module.exports = router;