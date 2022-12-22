import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Progress from "../ProgressBar/ProgressBar";

const CharactersPokemon = (props) => {
    const params = useParams()
    let id =params.id
    const [pokemon,setPokemon] = useState()

    const previousPokemon = props.list[props.list.findIndex((pokemon)=>pokemon.id==id)-1]
    const nextPokemon = props.list[props.list.findIndex((pokemon)=>pokemon.id==id)+1]
    

    useEffect(()=> {
        setPokemon(props.list.find((pokemon)=>pokemon.id==id))
    },[id, props])


    return(
        <React.Fragment>
            {pokemon && 
            (
                <>
                <div className={`Character ${pokemon.type[0].toLowerCase()}`}>
                    <div className="Background"/>

                    <div className="MainNav">
                        <div>
                            <Link to={{pathname:"/home"}} style={{ textDecoration: 'none' }}>
                                <img className="MainArrow" src="Materials\Arrow-left.png"  alt=""/>
                            </Link>
                        </div>
                        <span className="MainName">
                            {pokemon.name}
                        </span>
                        <span className="MainNumber">
                            #{String(pokemon.id).padStart(3, '0')}
                        </span>
                    </div>
                    <div className="DetailsPokemon">
                        <div className="imgFixed">
                            <img className="MainImg" src={pokemon.image} alt=""/>
                        </div>
                        {
                            previousPokemon && <Link to={`/${previousPokemon.id}`} className="frameLeft" ><img className="frameLeftfix" src="Materials\Frame.png" alt=""/></Link> 
                        }
                        {
                            nextPokemon && <Link to={`/${nextPokemon.id}`} className="frameRight"><img className="frameRightfix" src="Materials\Frame-Right.png" alt=""/></Link>
                        }
                        <div className="Lables">
                            {
                                pokemon.type.map((type)=>{
                                    return (<div className={`Type ${type.toLowerCase()}`}>
                                {type}
                            </div>)
                                })
                            }
                        
                        </div>
                        <div className="about">
                            <span>About</span>
                        </div>
                        <div className="weightDiv">
                            <div className="weightContainer">
                                <img className="weight" src="/Materials/Weight.png" alt=""/>
                                {String(pokemon.weight)} Kg
                            </div>
                            <div className="WeightLable">Weight</div>
                        </div>
                        <div className="heightDiv">
                            <div className="heightContainer">
                                <img className="height" src="/Materials/Height.png" alt=""/>
                                {String(pokemon.height)} Mts
                            </div>
                            <div className="HeightLable">Height</div>
                        </div>
                        <div className="movesDiv">
                            <div className="movesName">
                                {pokemon.moves[0]} 
                            </div>                        
                        <div className="MovesLable">Moves</div>
                        </div>
                        <div className="descriptionDiv">
                            <span>
                                {pokemon.description}
                            </span>
                        </div>
                        <div className="baseDiv">
                            <span>Base Stats</span>
                        </div>
                        <div className="Stats">
                            <Progress
                            pokemon={pokemon}/>
                        </div>
                    </div> 
                </div>
                </>
            )}
            
        </React.Fragment>


    )
}

export default CharactersPokemon;