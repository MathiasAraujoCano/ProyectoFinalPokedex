import React from "react";
import { Link } from "react-router-dom";

const SimplePokemon = (props) => {

    return(

        <Link to={`/${props.pokemon.id}`} style={{ textDecoration: 'none' }}>
            <div className={`PokemonsCards ${props.pokemon.type[0].toLowerCase()}`}>
                <div  className="PokemonId">
                    #{String(props.pokemon.id).padStart(3, '0')}
                </div>
                <div>
                    <img className="PokemonImg" src={props.pokemon.img} alt="" />
                </div>
                <div className={`PokemonName ${props.pokemon.type[0].toLowerCase()}`}>
                    {props.pokemon.name}
                </div>
            </div>
        </Link>       

    )
}

export default SimplePokemon;