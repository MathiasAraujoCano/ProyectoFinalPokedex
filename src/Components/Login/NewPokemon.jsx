import React from "react";
import Classes from "../Login/NewPokemon.module.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const NewPokemon = (props) => {

    const [name, setName] = useState()
    const [type, setType] = useState([])
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [moves, setMoves] = useState([])
    const [description, setDescription] = useState()
    const [stats, setStats] = useState([])
    const [image, setImage] = useState()

    const nameHandler = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const typeHandler = (e) => {
        let t = e.target.value
        setType(type.push(t))
        console.log(type)
    }

    const weightHandler = (e) => {
        setWeight(e.target.value)
        console.log(weight)
    }

    const heightHandler = (e) => {
        setHeight(e.target.value)
        console.log(height)
    }

    const movesHandler = (e) => {
        let m = e.target.value
        setMoves(moves => [...moves, m])
        console.log(moves)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
        console.log(description)
    }

    const statsHandler = (e) => {
        let s = e.target.value
        setStats(stats.push(s))
        console.log(stats)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
        console.log(image)
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <div className={Classes.MainContainer}>
            <Form>
                    <div className={Classes.Background}></div>
                    <div className={Classes.Header}>Crea tu Nuevo Pokemon!</div>
                    <div className={Classes.LoginContainer}>
                        <div className={Classes.TopContainer}>
                            <div className={Classes.Name}>
                                <p className={Classes.Nombre}>Nombre</p>
                                <InputGroup className="mb-3" onChange={nameHandler}>
                                    <InputGroup.Text id="inputGroup-sizing-default" >
                                    </InputGroup.Text>
                                    <Form.Control
                                    aria-label="Nombre"
                                    aria-describedby="inputGroup-sizing-default"
                                    style={{ width: '80%' }}
                                    />
                                </InputGroup>
                            </div>
                            <div className={Classes.Types}>
                            <p className={Classes.Tipos}>Tipos</p>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select style={{ width: '90%' }} onChange={typeHandler}>
                                        <option>Tipo</option>
                                        <option value="Fuego">Fuego</option>
                                        <option value="Electrico">Electrico</option>
                                        <option value="Planta">Planta</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select style={{ width: '90%' }} onChange={typeHandler}>
                                        <option>Tipo</option>
                                        <option value="Fuego">Fuego</option>
                                        <option value="Electrico">Electrico</option>
                                        <option value="Planta">Planta</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className={Classes.Image}>
                                <p className={Classes.Imagen}>Imagen</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" style={{ width: '90%' }} onChange={imageHandler}/>
                                </Form.Group>
                            </div>
                            <div className={Classes.Weight}>
                                <p className={Classes.Peso}>Peso</p>
                                <InputGroup onChange={weightHandler}>
                                    <Form.Control style={{ width: '80%' }}/>
                                    <InputGroup.Text>Kg</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Height}>
                                <p className={Classes.Altura}>Altura</p>
                                <InputGroup onChange={heightHandler}>
                                    <Form.Control style={{ width: '75%' }}/>
                                    <InputGroup.Text>Mts</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Moves}>
                                <p className={Classes.Movimientos}>Movimientos</p>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select style={{ width: '90%' }} onChange={movesHandler}>
                                        <option>Tipo</option>
                                        <option value="Megapunch">Megapunch</option>
                                        <option value="Impact trueno">Impact trueno</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className={Classes.Description}>
                                <p className={Classes.Descripcion}>Descripción</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} style={{ width: '90%' }} onChange={descriptionHandler}/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className={Classes.StatsContainer}>
                            <div className={Classes.Hp}>
                                <InputGroup onChange={statsHandler}>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Hp</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Atk}>
                                <InputGroup onChange={statsHandler}>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Atk</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Def}>
                                <InputGroup onChange={statsHandler}>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Def</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spa}>
                                <InputGroup onChange={statsHandler}>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Spa</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spd}>
                                <InputGroup onChange={statsHandler}>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Spd</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Speed}>
                                <InputGroup onChange={statsHandler}>
                                    <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Speed</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                        <div className={Classes.Button}>
                            <Button variant="primary" type="submit" style={{ width: '60%' }} onClick={submitHandler}>
                                Crear!
                            </Button>
                        </div>
                    </div>

            </Form>
        </div>

    )
}

export default NewPokemon;