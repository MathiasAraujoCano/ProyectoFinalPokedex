import React from "react";
import { Link } from "react-router-dom";

const SimplePokemon = (props) => {
    console.log(props.pokemon)

    return(

        <Link to={`/${props.pokemon.id}`} style={{ textDecoration: 'none' }}>
            <div className={`PokemonsCards ${props.pokemon.type[0].toLowerCase()}`}>
                <div className="DeleteButton">
                    <img className="DeleteImg" src="\Materials\Eliminar.png" alt="" />
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