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
           
            <Form className={Classes.MainContainer}>
                <img className={Classes.LogoRegister} src="Materials\LogoLogin.png" alt="" />                     
                    <div className={Classes.FormRegister}>
                    <p className={Classes.WelcomeBanner}>Ingresá tus datos! </p>
                    <div className={Classes.InputContainer}>
                        <Form.Group className={Classes.formName} controlId="formEmail">
                            <Form.Label className={Classes.Name}>Nombre</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitName}
                                type="text" 
                                placeholder="Ingresa tu Nombre"
                                onChange={nameHandler}
                                value={name}
                            />
                        </Form.Group>                   
                        <Form.Group className={Classes.formEmail} controlId="formEmail">
                            <Form.Label className={Classes.Email}>Email</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitEmail}
                                type="email" 
                                placeholder="Ingresa tu Email" 
                                onChange={emailHandler}
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group className={Classes.formPassword} controlId="formPassword">
                            <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitPassword}
                                type="password" 
                                placeholder="Ingresa tu Contraseña" 
                                onChange={passwordHandler}
                                value={password}
                            />
                        </Form.Group>
                    </div>
                    <Button className={Classes.Register} type="submit" onClick={submitHandler}>
                        Registrame
                    </Button>
                </div>
                <img className={Classes.Gif} src="\Materials\LoginGif.gif" alt="" />
          </Form>
    )
}

export default Register;