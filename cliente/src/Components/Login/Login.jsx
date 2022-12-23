import React from "react";
import Classes from "../Login/Login.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [userLogin, setUserLogin] = useState()
    const [userIsValid, setUserIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState()
    const navigate = useNavigate();

            const getUser = (email, password) => {
        setIsLoading(true)
        const requestOption = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        }
        fetch('http://localhost:8001/auth/login', requestOption)
        .then(response => response.json())
        .then(data => {
            setUserLogin(data)
            if (data.token) {
            setUserIsValid(true)
            navigate("/home")
            props.isLogged()
            } else {
            setHasError(data.message)
            }
            setTimeout(() => {
                setIsLoading(false);
                console.log("Cargando")     // cual es la idea aca???
              }, 5000)
        })
        .catch((err => {
            console.log('Hubo un error con la petición del logeo' + err.message)
            setIsLoading(false)
        }))
        }


    const emailHandler = (event) => {
        let a = event.target.value
        if (!a.includes('@') || a.length === 0) {
            console.log("formato no correcto del mail")
            setEmailIsValid(false)
        }
        else {
            setEmailIsValid(true)
        }
    }

    const takeEmailHandler = (event) => {
        let a = event.target.value
        setEmail(a)
    }

    const passwordHandler = (event) => {
        let a = event.target.value
        if (a.length === 0) {
            setPasswordIsValid(false)
            console.log("contraseña vacia")
        }
        else {
            setPasswordIsValid(true)
            setPassword(a)
        }

    }


    const submitHandler = (event => {
        event.preventDefault()

        if (!emailIsValid || !passwordIsValid){
            setEmail('')
            setPassword('')
            setEmailIsValid(false)
            setPasswordIsValid(false)
        } else {
            getUser(email, password)
            setEmail('')
            setPassword('')
            setEmailIsValid(false)
            setPasswordIsValid(false)
        }
    })
    
        return(

            (props.isLoading)?
            <LoadingPage/>
                : 
                <Form className={Classes.MainContainer}  onSubmit={submitHandler}>
                    <img className={Classes.LogoLogin} src="Materials\LogoLogin.png" alt="" />            
                        <div className={Classes.FormLogin}>
                            <p className={Classes.WelcomeBanner}>Ingresá tus datos! </p>
                            <div className={Classes.InputContainer}>
                                <Form.Group className={Classes.formEmail} controlId="formEmail">
                                    <Form.Label className={Classes.Email}>Email</Form.Label>
                                    <Form.Control 
                                        className={Classes.SubmitEmail}
                                        type="email" 
                                        placeholder="Ingresa tu Email" 
                                        onChange={takeEmailHandler}
                                        onBlur={emailHandler} 
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
                        {hasError && <p className={Classes.Error}>{hasError}</p>}
                        <Button className={Classes.LoginIniciar} type="submit">
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
    )
}

export default Login;