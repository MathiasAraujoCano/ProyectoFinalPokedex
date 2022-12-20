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
    const [hp, setHp] = useState()
    const [atk, setAtk] = useState()
    const [def, setDef] = useState()
    const [spa, setSpa] = useState()
    const [spd, setSpd] = useState()
    const [speed, setSpeed] = useState()
    const [image, setImage] = useState()
    const [idPokemon, setIdPokemon] = useState()
    const [typeOneIsLoad, setTypeOneIsLoad] = useState(false)
    const [movesOneIsLoad, setMovesOneIsLoad] = useState(false)


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
        setTypeOneIsLoad(true)
    }

    const typeHandler2 = (e) => {
        let t = e.target.value
        setType(type => [...type, t])
    }

    const weightHandler = (e) => {
        setWeight(e.target.value)
   }

    const heightHandler = (e) => {
        setHeight(e.target.value)
    }

    const movesHandler = (e) => {
        let m = e.target.value
        setMoves(moves => [...moves, m])
        setMovesOneIsLoad(true)
    }

    const movesHandler2 = (e) => {
        let m = e.target.value
        setMoves(moves => [...moves, m])
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const hpHandler = (e) => {
        setHp(e.target.value)
    }

    const atkHandler = (e) => {
        setAtk(e.target.value)
    }

    const defHandler = (e) => {
        setDef(e.target.value)
    }

    const spaHandler = (e) => {
        setSpa(e.target.value)
    }

    const spdHandler = (e) => {
        setSpd(e.target.value)
    }

    const speedHandler = (e) => {
        setSpeed(e.target.value)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        idPoke()
        props.insertPokemon(idPokemon, name, type, weight, height, moves, description, hp, atk, def, spa, spd, speed, image)
    }

    return(
        <div className={Classes.MainContainer}>
            <Form onSubmit={submitHandler}>
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
                                    required
                                    />
                                </InputGroup>
                            </div>
                            <div className={Classes.Types}>
                            <p className={Classes.Tipos}>Tipos</p>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select className={Classes.TypeImput} onBlur={typeHandler} required>
                                        <option></option>
                                        <option value="Electric">Electric</option>
                                        <option value="Fire">Fire</option>
                                        <option value="Psychic">Psychic</option>
                                        <option value="Grass">Grass</option>
                                        <option value="Water">Water</option>
                                        <option value="Poison">Poison</option>
                                        <option value="Bug">Bug</option>
                                        <option value="Flying">Flying</option>
                                        <option value="Steel">Steel</option>
                                        <option value="Rock">Rock</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Ghost">Ghost</option>
                                        <option value="Type">Type</option>
                                        <option value="Fighting">Fighting</option>
                                        <option value="Ground">Ground</option>
                                        <option value="Fairy">Fairy</option>
                                        <option value="Ice">Ice</option>
                                        <option value="Dragon">Dragon</option>
                                    </Form.Select>
                                </FloatingLabel>
                                {typeOneIsLoad && (<FloatingLabel controlId="floatingSelect">
                                    <Form.Select className={Classes.Type2Imput} onBlur={typeHandler2}>
                                        <option>Tipo</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Fire">Fire</option>
                                        <option value="Psychic">Psychic</option>
                                        <option value="Grass">Grass</option>
                                        <option value="Water">Water</option>
                                        <option value="Poison">Poison</option>
                                        <option value="Bug">Bug</option>
                                        <option value="Flying">Flying</option>
                                        <option value="Steel">Steel</option>
                                        <option value="Rock">Rock</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Ghost">Ghost</option>
                                        <option value="Type">Type</option>
                                        <option value="Fighting">Fighting</option>
                                        <option value="Ground">Ground</option>
                                        <option value="Fairy">Fairy</option>
                                        <option value="Ice">Ice</option>
                                        <option value="Dragon">Dragon</option>
                                    </Form.Select>
                                </FloatingLabel>)}
                            </div>
                            <div className={Classes.Image}>
                                <p className={Classes.Imagen}>Imagen</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="text" className={Classes.ImageImput} onChange={imageHandler} required/>
                                </Form.Group>
                            </div>
                            <div className={Classes.Weight}>
                                <p className={Classes.Peso}>Peso</p>
                                <InputGroup >
                                    <Form.Control type="number" className={Classes.WeightImput} onChange={weightHandler} required/>
                                    <InputGroup.Text>Kg</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Height}>
                                <p className={Classes.Altura}>Altura</p>
                                <InputGroup onChange={heightHandler}>
                                    <Form.Control type="number" className={Classes.HeightImput} required/>
                                    <InputGroup.Text>Mts</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Moves}>
                                <p className={Classes.Movimientos}>Movimientos</p>
                                <InputGroup className="mb-3" onBlur={movesHandler}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    className={Classes.MoveImput}
                                    required
                                    />
                                </InputGroup>
                                {movesOneIsLoad && (<InputGroup className="mb-3" onBlur={movesHandler2}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    className={Classes.Move2Imput}
                                    />
                                </InputGroup>)}
                            </div>
                            <div className={Classes.Description}>
                                <p className={Classes.Descripcion}>Descripción</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} className={Classes.DescriptionImput} onChange={descriptionHandler} required/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className={Classes.Stats}>Stats</div>
                        <div className={Classes.StatsContainer}>
                            <div className={Classes.Hp}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.HpImput} onBlur={hpHandler} required/>
                                    <InputGroup.Text>Hp</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Atk}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.AtkImput} onBlur={atkHandler} required/>
                                    <InputGroup.Text>Atk</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Def}>
                                <InputGroup>
                                <Form.Control type="number" className={Classes.DefImput} onBlur={defHandler} required/>
                                    <InputGroup.Text>Def</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spa}>
                                <InputGroup>
                                <Form.Control type="number" className={Classes.SpaImput} onBlur={spaHandler} required/>
                                    <InputGroup.Text>Spa</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spd}>
                                <InputGroup >
                                <Form.Control type="number" className={Classes.SpdImput} onBlur={spdHandler} required/>
                                    <InputGroup.Text>Spd</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Speed}>
                                <InputGroup >
                                    <Form.Control type="number" className={Classes.SpeedImput} onBlur={speedHandler} required/>
                                    <InputGroup.Text>Speed</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                        <div className={Classes.Button}>
                            <Button variant="primary" type="submit" className={Classes.ButtonImput}>
                                Crear!
                            </Button>
                        </div>
                    </div>
            </Form>
        </div>

    )
}

export default NewPokemon;