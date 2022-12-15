import React from "react";
import Classes from "../Login/Login.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    const loginIsValid = emailIsValid && passwordIsValid

    const emailHandler = (event) => {
        let a = event.target.value
        if (a.includes('@')) {
            setEmail(a)
            setEmailIsValid(true)
        }
        else {
            console.log("formato no correcto del mail")
        }
    }

    const blurHandler = () => {
        setIsTouched(true)
    }

    const passwordHandler = (event) => {
        let a = event.target.value
        if (a.value !== '') {
            setPassword(a)
            setPasswordIsValid(true)
        }
        else {
            setPasswordIsValid(false)
        }

    }

    const submitHandler = (event => {
        event.preventDefault()

        props.login(email, password)
        setEmail('')
        setPassword('')
    })
    
    const validation = !emailIsValid && isTouched ? `${Classes.formEmail} ${Classes.invalid}` : `${Classes.formEmail}`

        return(

            (props.isLoading)?
            <LoadingPage/>
                : 
                <>
            <Form className={Classes.MainContainer}>
                    <img className={Classes.LogoLogin} src="Materials\LogoLogin.png" alt="" />            
                        <div className={Classes.FormLogin}>
                            <p className={Classes.WelcomeBanner}>Ingresá tus datos! </p>
                            <div className={Classes.InputContainer}>
                                <Form.Group className={validation} controlId="formEmail">
                                    <Form.Label className={Classes.Email}>Email</Form.Label>
                                    <Form.Control 
                                        className={Classes.SubmitEmail}
                                        type="email" 
                                        placeholder="Ingresa tu Email" 
                                        onChange={emailHandler} 
                                        onBlur={blurHandler}
                                        value={email}
                                    />
                                </Form.Group>
                                <Form.Group className={Classes.formPassword} controlId="formPassword">
                                    <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                                    <Form.Control 
                                    className={Classes.SubmitPassword}
                                        type="password" 
                                        placeholder="Ingresa tu Contraseña"
                                        onBlur={passwordHandler}
                                        value={password}
                                    />
                                </Form.Group>
                            </div>
                        
                        <Button className={Classes.LoginIniciar} type="submit" onClick={submitHandler}>
                            Iniciar Sesión
                        </Button>
                        <br/>
                        <p className={Classes.RegisterNote}>Todavia no tienes una cuenta? Registrate!</p>              
                        <Link to={`/Register`} style={{ textDecoration: 'none' }}>              
                            <Button className={Classes.Registrarse} type="submit">
                                Registrarse
                            </Button>
                        </Link>
                        </div>
                        <img className={Classes.Gif} src="\Materials\PikachuGif.gif" alt="" />
            </Form>
            </>
    )
}

export default Login;