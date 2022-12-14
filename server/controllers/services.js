const express = require('express');
const router = express.Router();
const db = require('../models/index')


router.get('/pkmn',(req,res) => { //done get pokemones
    const Pokemon = db.Pokedex
    Pokemon.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})

router.get('/pkmn/:id',(req,res) => { //done get pokemon by id
    let idPoke = req.params.id
    const Pokemon = db.Pokedex
    
    Pokemon.findOne({
        where:{
            idPokemon: idPoke
        }
    })
    .then((data) => {
        if (data) {
            res.send(data)
        }
        else {
            res.status(404).send({ message: "Pokemon no disponible" })
        }
    })
    .catch(err => {res.status(400).send({ message: err.message })})
})

router.post('/pkmn',(req,res)=>{  //done post pokemon
    const Pokemon = db.Pokedex
    let poke = {
        idPokemon: Math.floor(Math.random()*(3000 - 1000)),
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        height: req.body.height,
        moves: req.body.moves,
        description: req.body.description,
        stats: req.body.stats,
        image: req.body.image
    }
    Pokemon.findOne({
        where:{
            idPokemon: poke.idPokemon
        }
    })
    .then((data) => {
        if(data) {
            res.status(401).send({ message: "El Pokemon ya existe" })
        }
        else {
            Pokemon.create(poke)
            res.send({ message: "Pokemon agregado con éxito", poke })
        }
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrió un error al agregar su Pokemon' })
    })
})


router.delete('/pkmn/:id',(req,res) => {  //done delete pokemon by id
    let idPoke = req.params.id
    const Pokemon = db.Pokedex
    
    Pokemon.destroy({
        where:{
            idPokemon: idPoke
        }
    })
    .then((data) => { 
        if (data) {
            res.send({ message: "Pokemon borrado con éxito"})
        }
        else {
            res.status(404).send({ message: "Pokemon no existe en la base de datos" })
        }
    })
    .catch(err => {res.status(400).send({ message: err.message })})
})


router.get('/user',(req,res) => { //done get users
    const People = db.User
    People.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})


module.exports = router;