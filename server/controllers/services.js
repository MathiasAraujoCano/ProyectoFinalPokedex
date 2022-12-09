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
    const Pokemon = db.Pokedex
    let poke = {
        idPokemon: req.body.idPokemon,
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        height: req.body.height,
        moves: req.body.moves,
        description: req.body.description,
        stats: req.body.stats,
        image: req.body.image
    }
    Pokemon.create(poke)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrió un error al agregar su Pokemon' })
    })
})

router.get('/user',(req,res) => { //done
    const People = db.User
    People.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})


module.exports = router;