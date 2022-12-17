import './App.css';
import React, { useEffect, useState } from 'react';
import ListOfPokemon from './Components/Home Page/ListOfPokemon/ListOfPokemos'
import CharactersPokemon from './Components/Detailed View/CharactersPokemon/CharactersPokemon';
import Login from './Components/Login/Login';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import NewPokemon from './Components/NewPokemon/NewPokemon';
import Register from './Components/Register/Register';

function App() {

  const [getPokemon, setGetPokemon] = useState ([])
  const [availablePkmn, setAvailablePkmn] = useState([])
  const [userLogin, setUserLogin] = useState()
  const [userIsValid, setUserIsValid] = useState(false)
  const [newInsertPokemon, setNewInsertPokemon] = useState()
  const [userRegister, setUserRegister] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState()

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
  setIsLoading(true)
  const requestOption = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  }
  console.log("haciendo login")
  fetch('http://localhost:8001/auth/login', requestOption)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setUserLogin(data)
    if (data.token) {
      setUserIsValid(true)
    } else {
      setHasError(data.message)
    }
    setIsLoading(false)
  })
  .catch((err => {
    console.log('Hubo un error con la petición del logeo' + err.message)
    setIsLoading(false)
  }))
}


const newUser = (name, email, password) => {
    const requestOption = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json' },
      body: JSON.stringify({ name, email, password })
    }
    console.log(requestOption)
    fetch('http://localhost:8001/auth/register', requestOption)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.success) {
        setUserRegister(data)
      }else {
        setHasError(data.message)
      }
    })
    .catch((err => {
      console.log('Hubo un error con el register', err.message)
    }))
}


useEffect(()=>{
  getPkmn()
},[])


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
            <Login login={getUser} isLoading={isLoading} hasError={hasError}/>
          }/>
          <Route path="/NewPokemon"
          element={
            <NewPokemon insertPokemon={insertPokemon}/>
          }/>
          <Route path="/Register"
          element={
            <Register register={newUser} hasError={hasError}/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
