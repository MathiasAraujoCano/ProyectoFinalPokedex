const express = require('express');
const router = express.Router();
const pkmn = [{
    "name": "Pikachu",
    "id": 25,
    "type": ["Grass", "Poison"],
    "style": '',
    "weight": "6.9 kg",
    "height": "0.7 m",
    "moves": ["Chiorophyll ", "Overgrow"],
    "description": "There is a plant seed on its back right from the day this Pokémon is born, The seed slowly grows larger.",
    "stats": {"HP": 50, "ATK": 50, "DEF": 50, "SATK": 65, "SDEF": 65, "SPD": 45}
}]

router.get('/pkmn',(req,res) => { //done
    const list = pkmn
    console.log(list)
    res.send(list)
})

router.post('/pkmn',(req,res)=>{  
    const list = pkmn
    let newPkmn = {
        name: req.body.name,
        id: req.body.id,
        description: req.body.description
    }
    console.log(newPkmn)
    list.push(newPkmn)
    console.log(list)
})


module.exports = router;