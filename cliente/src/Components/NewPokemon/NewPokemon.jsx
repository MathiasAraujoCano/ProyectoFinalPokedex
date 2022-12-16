import React from "react";
import Classes from "./NewPokemon.module.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link } from "react-router-dom";


const NewPokemon = (props) => {

    const [name, setName] = useState()
    const [type, setType] = useState([])
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [moves, setMoves] = useState([])
    const [description, setDescription] = useState()
    const [stats, setStats] = useState([
        {name: "HP", value: null},
        {name: "Atk", value: null},
        {name: "Def", value:  null},
        {name: "Spa", value: null},
        {name: "Spd", value: null},
        {name: "Speed", value: null}
    ])
    const [image, setImage] = useState()
    const [idPokemon, setIdPokemon] = useState()


    const idPoke = () => {
        let id = Math.floor(Math.random()*(3000 - 1000)) + 1500
        setIdPokemon(id)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const typeHandler = (e) => {
        let t = e.target.value
        setType(type => [...type, t])
    }

    const weightHandler = (e) => {
        let a = e.target.value
        if (!Number(a)){
            return
        }
        console.log("el valor es: " + a.value)
        setWeight(a)
   }

    const heightHandler = (e) => {
        setHeight(e.target.value)
    }

    const movesHandler = (e) => {
        let m = e.target.value
        setMoves(moves => [...moves, m])
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const statsHPHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'HP')
        console.log(arr)
        arr.push({name: "HP", value: s})
        setStats(arr)
        console.log(arr)
    }

    const statsAtkHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'Atk')
        console.log(arr)
        arr.push({name: "Atk", value: s})
        setStats(arr)
        console.log(arr)
    }

    const statsDefHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'Def')
        console.log(arr)
        arr.push({name: "Def", value: s})
        setStats(arr)
        console.log(arr)
    }

    const statsSpaHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'Spa')
        console.log(arr)
        arr.push({name: "Spa", value: s})
        setStats(arr)
        console.log(arr)
    }

    const statsSpdHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'Spd')
        console.log(arr)
        arr.push({name: "Spd", value: s})
        setStats(arr)
        console.log(arr)
    }

    const statsSpeedHandler = (e) => {
        let s = e.target.value
        const arr = stats.filter((item) => item.name !== 'Speed')
        console.log(arr)
        arr.push({name: "Speed", value: s})
        setStats(arr)
        console.log(arr)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        idPoke()
        console.log(stats)
        props.insertPokemon(idPokemon, name, type, weight, height, moves, description, stats, image)
    }

    return(
        <div className={Classes.MainContainer}>
            <Form>
                    <div className={Classes.Background}></div>
                    <Link to={`/home`} style={{ textDecoration: 'none' }}>                             
                        <img className={Classes.MainArrow} src="Materials\Arrow-left.png"  alt=""/>                     
                    </Link>
                    <div className={Classes.Header}>Crea tu Pokemon!</div>
                    <div className={Classes.Container}>
                        <div className={Classes.TopContainer}>
                            <div className={Classes.Name}>
                                <p className={Classes.Nombre}>Nombre</p>
                                <InputGroup className="mb-3" onChange={nameHandler}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    className={Classes.NameImput}
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </div>
                            <div className={Classes.Types}>
                            <p className={Classes.Tipos}>Tipos</p>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select className={Classes.TypeImput} onChange={typeHandler}>
                                        <option>Tipo</option>
                                        <option value="electric">Electric</option>
                                        <option value="fire">Fire</option>
                                        <option value="psychic">Psychic</option>
                                        <option value="grass">Grass</option>
                                        <option value="water">Water</option>
                                        <option value="poison">Poison</option>
                                        <option value="bug">Bug</option>
                                        <option value="flying">Flying</option>
                                        <option value="steel">Steel</option>
                                        <option value="rock">Rock</option>
                                        <option value="normal">Normal</option>
                                        <option value="ghost">Ghost</option>
                                        <option value="type">Type</option>
                                        <option value="fighting">Fighting</option>
                                        <option value="ground">Ground</option>
                                        <option value="fairy">Fairy</option>
                                        <option value="ice">Ice</option>
                                        <option value="dragon">Dragon</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select className={Classes.Type2Imput} onChange={typeHandler}>
                                        <option>Tipo</option>
                                        <option value="electric">Electric</option>
                                        <option value="fire">Fire</option>
                                        <option value="psychic">Psychic</option>
                                        <option value="grass">Grass</option>
                                        <option value="water">Water</option>
                                        <option value="poison">Poison</option>
                                        <option value="bug">Bug</option>
                                        <option value="flying">Flying</option>
                                        <option value="steel">Steel</option>
                                        <option value="rock">Rock</option>
                                        <option value="normal">Normal</option>
                                        <option value="ghost">Ghost</option>
                                        <option value="type">Type</option>
                                        <option value="fighting">Fighting</option>
                                        <option value="ground">Ground</option>
                                        <option value="fairy">Fairy</option>
                                        <option value="ice">Ice</option>
                                        <option value="dragon">Dragon</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className={Classes.Image}>
                                <p className={Classes.Imagen}>Imagen</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="text" className={Classes.ImageImput} onChange={imageHandler}/>
                                </Form.Group>
                            </div>
                            <div className={Classes.Weight}>
                                <p className={Classes.Peso}>Peso</p>
                                <InputGroup >
                                    <Form.Control type="number" className={Classes.WeightImput} onChange={weightHandler}/>
                                    <InputGroup.Text>Kg</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Height}>
                                <p className={Classes.Altura}>Altura</p>
                                <InputGroup onChange={heightHandler}>
                                    <Form.Control type="number" className={Classes.HeightImput}/>
                                    <InputGroup.Text>Mts</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Moves}>
                                <p className={Classes.Movimientos}>Movimientos</p>
                                <InputGroup className="mb-3" onChange={movesHandler}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    className={Classes.MoveImput}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3" onChange={movesHandler}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    className={Classes.Move2Imput}
                                    />
                                </InputGroup>
                            </div>
                            <div className={Classes.Description}>
                                <p className={Classes.Descripcion}>Descripción</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} className={Classes.DescriptionImput} onChange={descriptionHandler} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className={Classes.Stats}>Stats</div>
                        <div className={Classes.StatsContainer}>
                            <div className={Classes.Hp}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.HpImput} onBlur={statsHPHandler}/>
                                    <InputGroup.Text>Hp</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Atk}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.AtkImput} onBlur={statsAtkHandler}/>
                                    <InputGroup.Text>Atk</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Def}>
                                <InputGroup>
                                <Form.Control type="number" className={Classes.DefImput} onBlur={statsDefHandler}/>
                                    <InputGroup.Text>Def</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spa}>
                                <InputGroup>
                                <Form.Control type="number" className={Classes.SpaImput} onBlur={statsSpaHandler}/>
                                    <InputGroup.Text>Spa</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spd}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.SpdImput} onBlur={statsSpdHandler}/>
                                    <InputGroup.Text>Spd</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Speed}>
                                <InputGroup >
                                    <Form.Control type="number" className={Classes.SpeedImput} onBlur={statsSpeedHandler}/>
                                    <InputGroup.Text>Speed</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                        <div className={Classes.Button}>
                            <Button variant="primary" type="submit" className={Classes.ButtonImput} onClick={submitHandler}>
                                Crear!
                            </Button>
                        </div>
                    </div>
            </Form>
        </div>

    )
}

export default NewPokemon;