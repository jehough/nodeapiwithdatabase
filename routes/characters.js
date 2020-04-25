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
    function saveCharacter (character) {
        const c = new Character(character)
        return c.save()
    }
    saveCharacter(req.body)
    res.redirect('/characters')
})

module.exports = router;