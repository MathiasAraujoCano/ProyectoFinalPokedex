import './App.css';
import React, { useEffect, useState } from 'react';
import ListOfPokemon from './Components/Home Page/ListOfPokemon/ListOfPokemos'
import CharactersPokemon from './Components/Detailed View/CharactersPokemon/CharactersPokemon';
import Login from './Components/Login/Login';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import NewPokemon from './Components/Login/NewPokemon';
import Register from './Components/Register/Register';

function App() {

  const [getPokemon, setGetPokemon] = useState ([])
  const [availablePkmn, setAvailablePkmn] = useState([])
  const [userLogin, setUserLogin] = useState()
  const [userIsValid, setUserIsValid] = useState(false)
  const [newInsertPokemon, setNewInsertPokemon] = useState()
  const [userRegister, setUserRegister] = useState()

  const getPkmn = () =>{
    let auxB = []
    fetch('http://localhost:8001/pkmn')
    .then(response => response.json())
    .then(data => {
      data.forEach(pkm=>{
        auxB.push({            
          "id" : pkm.idPokemon,
          "name": pkm.name,
          "image": pkm.image,
          "type": pkm.type,
          "weight": pkm.weight,
          "height": pkm.height,
          "description": pkm.description,
          "moves": pkm.moves,
          "stats": [
            {"key":"HP","value": pkm.stats[0]},
            {"key":"Atk","value": pkm.stats[1]},
            {"key":"Def","value": pkm.stats[2]},
            {"key":"Spa","value": pkm.stats[3]},
            {"key":"Spd","value": pkm.stats[4]},
            {"key":"Speed","value": pkm.stats[5]}
          ]
  
        })
      })
      
      console.log(data)
      setAvailablePkmn(auxB)
    })
    .catch((err)=> {
      console.log('Hubo un problema con la petición Fetch:' + err.message);
    })
}


const insertPokemon = (idPokemon, name, type, weight, height, moves, description, stats, image) => {
  const requestPokemon = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({idPokemon, name, type, weight, height, moves, description, stats, image})
  }
  fetch('http://localhost:8001/pkmn', requestPokemon)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setNewInsertPokemon(data)
  })
  .catch((err) => {
    console.log('Error en petición Fetch del new Pokemon')
  })
}


const getUser = (email, password) => {
  const requestOption = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  }
  fetch('http://localhost:8001/auth/login', requestOption)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setUserLogin(data)
    if (data.token) {
      setUserIsValid(true)
    } else {
      setUserIsValid(false)
    }
  })
  .catch((err => {
    console.log('Hubo un error con la petición del logeo' + err.message)
  }))
}


const newUser = (name, email, password) => {
    const requestOption = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json' },
      body: JSON.stringify({ name, email, password })
    }
    fetch('http://localhost:8001/auth/register', requestOption)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUserRegister(data)
    })
    .catch((err => {
      console.log('Hubo un error con el register', err.message)
    }))
}


useEffect(()=>{
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
            getPokemon={availablePkmn}/>
          }/>
          <Route path="/:id"
          element={
            <CharactersPokemon
            list={availablePkmn}/>
          }/>
           <Route path="/"
          element={
            <Login login={getUser}/>
          }/>
          <Route path="/NewPokemon"
          element={
            <NewPokemon insertPokemon={insertPokemon}/>
          }/>
          <Route path="/Register"
          element={
            <Register register={newUser}/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
