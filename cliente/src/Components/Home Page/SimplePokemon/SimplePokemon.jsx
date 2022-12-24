import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SimplePokemon = (props) => {

    const navigate = useNavigate()

    const deletePokemon = (idPokemon) => {
        console.log(idPokemon)
        const requestPokemon = {
          method: 'DELETE',
          headers: {'Content-Type':'application/json'}
        }
        fetch('http://localhost:8001/pkmn/'+idPokemon, requestPokemon)
        .then(response => response.json())
        .then(data => {
            props.setReload(new Date().getTime())
            navigate('/home')
        })
        .catch((err) => {
          console.log('Error en petición Fetch del new Pokemon')
        })
      }

    return(

        <Link to={`/${props.pokemon.id}`} style={{ textDecoration: 'none' }}>
            <div className={`PokemonsCards ${props.pokemon.type[0].toLowerCase()}`}>
                <div className="DeleteButton" onClick={() => deletePokemon(props.pokemon.id)}>
                    {props.isLogged && <img className="DeleteImg" src="\Materials\Eliminar.png" alt="" />}
                </div>
                <div  className="PokemonId">
                    #{String(props.pokemon.id).padStart(3, '0')}
                </div>
                <div>
                    <img className="PokemonImg" src={props.pokemon.image} alt="" />
                </div>
                <div className={`PokemonName ${props.pokemon.type[0].toLowerCase()}`}>
                    {props.pokemon.name}
                </div>
            </div>
        </Link>       

    )
}

export default SimplePokemon;