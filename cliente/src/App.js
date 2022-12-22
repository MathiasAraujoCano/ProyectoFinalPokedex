import './App.css';
import React, { useEffect, useState } from 'react';
import ListOfPokemon from './Components/Home Page/ListOfPokemon/ListOfPokemos'
import CharactersPokemon from './Components/Detailed View/CharactersPokemon/CharactersPokemon';
import Login from './Components/Login/Login';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPokemon from './Components/NewPokemon/NewPokemon';
import Register from './Components/Register/Register';

function App() {
  const [availablePkmn, setAvailablePkmn] = useState([])


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
            {"key":"HP","value": pkm.HP},
            {"key":"Atk","value": pkm.Atk},
            {"key":"Def","value": pkm.Def},
            {"key":"Spa","value": pkm.Spa},
            {"key":"Spd","value": pkm.Spd},
            {"key":"Speed","value": pkm.Speed}
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

useEffect(()=>{
  getPkmn()
},[])


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home"
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
            <Login/>
          }/>
          <Route path="/new-pokemon"
          element={
            <NewPokemon/>
          }/>
          <Route path="/register"
          element={
            <Register/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;