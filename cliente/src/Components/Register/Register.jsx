import React from "react";
import Classes from "../Register/Register.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const Register = (props) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        props.register(name, email, password)
        setName('')
        setEmail('')
        setPassword('')
    }

        return(
           
           <Form >
                <img className={Classes.LogoRegister} src="Materials\LogoLogin.png" alt="" />                     
                    <div className={Classes.FormRegister}>
                    <Form.Group className={Classes.formName} controlId="formEmail">
                        <Form.Label className={Classes.Name}>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresa tu nombre"
                            onChange={nameHandler}
                            value={name}
                        />
                    </Form.Group>                   

                    <Form.Group className={Classes.formEmail} controlId="formEmail">
                        <Form.Label className={Classes.Email}>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingresar Email" 
                            onChange={emailHandler}
                            value={email}
                        />
                    </Form.Group>
                    
                    <Form.Group className={Classes.formPassword} controlId="formPassword">
                        <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Contraseña" 
                            onChange={passwordHandler}
                            value={password}
                        />
                    </Form.Group>
                    
                    <Button className={Classes.Register} type="submit" onClick={submitHandler}>
                        Registrate!
                    </Button>
                    </div>
          </Form>
    )
}

export default Register;