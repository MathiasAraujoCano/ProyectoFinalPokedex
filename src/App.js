import './App.css';
import React, { useEffect, useState } from 'react';
import ListOfPokemon from './Components/Home Page/ListOfPokemon/ListOfPokemos'
import CharactersPokemon from './Components/Detailed View/CharactersPokemon/CharactersPokemon';
import Login from './Components/Login/Login';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

function App() {

  const [getPokemon, setGetPokemon] = useState ([])
  const [availablePkmn, setAvailablePkmn] = useState([])

  const getPkmn = () =>{
    fetch('http://localhost:8001/pkmn')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAvailablePkmn(data)
    })
    .catch((err)=> {
      console.log('Hubo un problema con la petición Fetch:' + err.message);
    })
}

useEffect(()=>{
  console.log('hola')
  getPkmn()
},[])

  /*useEffect(()=> {

    const fetchData = async () => {
      let auxB = []
      for (let i=1; i<=102; i++){
        await fetch('https://pokeapi.co/api/v2/pokemon/'+i)
        .then(res => res.json())
        .then(data => {
          auxB.push({            
            "id" : data.id,
            "name": data.name,
            "img": data.sprites.other['official-artwork']['front_default'],
            "type": data.types.map((type)=>type.type.name),
            "weight": data.weight,
            "height": data.height,
            "moves": data.moves.map((moves)=>moves.move.name),
            "stats": [
              {"key":"HP","value": data.stats[0]["base_stat"]},
              {"key":"Atk","value": data.stats[1]["base_stat"]},
              {"key":"Def","value": data.stats[2]["base_stat"]},
              {"key":"Spa","value": data.stats[3]["base_stat"]},
              {"key":"Spd","value": data.stats[4]["base_stat"]},
              {"key":"Speed","value": data.stats[5]["base_stat"]}
            ]

          })
        })
      }

      for (let i=1; i<=102; i++){
        await fetch('https://pokeapi.co/api/v2/pokemon-species/'+i)
        .then(res => res.json())
        .then(data =>{
          auxB[i-1].description = data.flavor_text_entries[7].flavor_text
        }
      )}
      setGetPokemon(auxB)

    }
    fetchData()
    },[])

    
  useEffect(()=>{
  },[getPokemon])*/


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/Home"
          element={
            <ListOfPokemon
            getPokemon={getPokemon}/>
          }/>
          <Route path="/:id"
          element={
            <CharactersPokemon
            list={getPokemon}/>
          }/>
           <Route path="/"
          element={
            <Login/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
