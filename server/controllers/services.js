const express = require('express');
const router = express.Router();
const db = require('../models/index')


router.get('/pkmn',(req,res) => { 
    const Pokemon = db.Pokedex
    Pokemon.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})

router.post('/pkmn',(req,res)=>{  

})

router.get('/user',(req,res) => { //done
    const People = db.User
    People.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})


module.exports = router;