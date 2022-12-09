import React from "react";
import Classes from "../Login/NewPokemon.module.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const NewPokemon = (props) => {

    return(
        <div className={Classes.MainContainer}>
            <Form>
                    <div className={Classes.Background}></div>
                    <div className={Classes.Header}>Crea tu Nuevo Pokemon!</div>
                    <div className={Classes.LoginContainer}>
                        <div className={Classes.Button}>
                            <Button variant="primary" type="submit" style={{ width: '60%' }}>
                                Crear!
                            </Button>
                        </div>
                        <div className={Classes.TopContainer}>
                            <div className={Classes.Name}>
                                <p className={Classes.Nombre}>Nombre</p>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
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
                                    <Form.Select style={{ width: '90%' }}>
                                        <option>Tipo</option>
                                        <option value="1">Fuego</option>
                                        <option value="2">Electrico</option>
                                        <option value="3">Planta</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select style={{ width: '90%' }}>
                                        <option>Tipo</option>
                                        <option value="1">Fuego</option>
                                        <option value="2">Electrico</option>
                                        <option value="3">Planta</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className={Classes.Image}>
                                <p className={Classes.Imagen}>Imagen</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" style={{ width: '90%' }}/>
                                </Form.Group>
                            </div>
                            <div className={Classes.Weight}>
                                <p className={Classes.Peso}>Peso</p>
                                <InputGroup>
                                    <Form.Control style={{ width: '80%' }}/>
                                    <InputGroup.Text>Kg</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Height}>
                                <p className={Classes.Altura}>Altura</p>
                                <InputGroup>
                                    <Form.Control style={{ width: '75%' }}/>
                                    <InputGroup.Text>Mts</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Moves}>
                                <p className={Classes.Movimientos}>Movimientos</p>
                                <FloatingLabel controlId="floatingSelect">
                                    <Form.Select style={{ width: '90%' }}>
                                        <option>Tipo</option>
                                        <option value="1">Megapunch</option>
                                        <option value="2">Impact trueno</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className={Classes.Description}>
                                <p className={Classes.Descripcion}>Descripción</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} style={{ width: '90%' }}/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className={Classes.StatsContainer}>
                            <div className={Classes.Hp}>
                                <InputGroup>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Hp</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Atk}>
                                <InputGroup>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Atk</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Def}>
                                <InputGroup>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Def</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spa}>
                                <InputGroup>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Spa</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Spd}>
                                <InputGroup>
                                <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Spd</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className={Classes.Speed}>
                                <InputGroup>
                                    <Form.Control style={{ width: '60%' }}/>
                                    <InputGroup.Text>Speed</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>

                    </div>

            </Form>
        </div>



















    )
}

export default NewPokemon;