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

    const emailHandler = (event) => {
        let a = event.target.value
        if (!a.includes('@') || a.length === 0) {
            console.log("formato no correcto del mail")
            setEmailIsValid(false)
        }
        else {
            setEmail(a)
            setEmailIsValid(true)
        }
    }

    const blurHandler = () => {
        setIsTouched(true)
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
        //console.log(props.hasError)

        if (!emailIsValid || !passwordIsValid){
            console.log("error en inputs")
            setEmail('')
            setPassword('')
            setEmailIsValid(false)
            setPasswordIsValid(false)
        } else {
            props.login(email, password)
            setEmail('')
            setPassword('')
            setEmailIsValid(false)
            setPasswordIsValid(false)
        }
    })
    
    const emailValidation = !emailIsValid && isTouched ? `${Classes.formEmail} ${Classes.invalid}` : `${Classes.formEmail}`

        return(

            (props.isLoading)?
            <LoadingPage/>
                : 
                <>
            <Form className={Classes.MainContainer}  onSubmit={submitHandler}>
                    <img className={Classes.LogoLogin} src="Materials\LogoLogin.png" alt="" />            
                        <div className={Classes.FormLogin}>
                            <p className={Classes.WelcomeBanner}>Ingresá tus datos! </p>
                            <div className={Classes.InputContainer}>
                                <Form.Group className={emailValidation} controlId="formEmail">
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
                                        onChange={passwordHandler}
                                        value={password}
                                    />
                                </Form.Group>
                            </div>
                        {props.hasError && <p>{props.hasError}</p>}
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
            </>
    )
}

export default Login;