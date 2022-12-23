import React, { useEffect, useState } from "react";
import SimplePokemon from "../SimplePokemon/SimplePokemon";
import { Link } from "react-router-dom";

const ListOfPokemon = (props) => {

    const [searchText, setSearchText] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState(props.getPokemon)
    const [filterType, setFilterType] = useState("#")

    const handleFilter = () => {
        setFilterType((filterType==="#")?"AZ":"#")
    }

    const SortBy = () => {
        if(filterType ==="#"){
            setFilteredPokemon(props.getPokemon.sort((a,b)=>a.id-b.id))
        }else{
            setFilteredPokemon(props.getPokemon.sort((a,b)=> String(a.name).localeCompare(b.name)))
        }
    }


    useEffect (()=>{
        setFilteredPokemon(props.getPokemon.filter(element => element.name.toLowerCase().includes(searchText.toLowerCase())))
    },[searchText,props.getPokemon])

        

    return(
        <div id="MainPage">
            <div className="Title">
                <div className="UserLogo">
                    {props.isLogged && <img className="UserImg" src="\Materials\user.jpeg" alt="" />}
                </div>
                <div className="Logo">
                    <img className="Pokeball" src="Materials/Pokeball.png" alt=""/>
                    <span className="Name">Pokédex</span>
                </div>
                <div className="ButtonOrg" id="SortNumber" onClick={()=>SortBy()}>
                    <img className="Arrow" src="Materials\Arrow.png"  alt="" />
                    <span className="Hashtag" onClick={handleFilter}>{filterType}</span>
                </div>
            </div>
            <Link to={`/Login`} style={{ textDecoration: 'none' }} className="LoginButton">
                        <div className="Login">Cerrar Sesión</div>
            </Link> 
            <div className="searchDiv">
                <input type="search" 
                placeholder="&#128269; Buscar" 
                className="search" 
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value)}/>
            </div>
                <div className="PokemonGrid">
                {props.isLogged && (<Link to={`/new-pokemon`} style={{ textDecoration: 'none' }} className="LinkNew">
                    <div className="NewPokemonButton">
                        <div>
                            <img className="NewPokemonImg" src="\Materials\NewPokemonLogo.jpg" alt="" />
                        </div>
                        <div className="NewPokemonName">
                            Agregar
                        </div>
                    </div>
                </Link>)}
                {filteredPokemon.map((pokemon, key)=>
                                                <SimplePokemon 
                                                pokemon={pokemon}
                                                key={key}
                                                isLogged={props.isLogged}
                                                setReload={props.setReload}/>
                                                                                
                )}</div>
        </div>
    )
}

export default ListOfPokemon;