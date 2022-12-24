import React from "react";
import Classes from "../Register/Register.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameIsValid, setNameIsValid] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [userRegister, setUserRegister] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState()
    const navigate = useNavigate();

    const newUser = (name, email, password) => {
        setIsLoading(true)
        const requestOption = {
          method: 'POST',
          headers: {'Content-Type' : 'application/json' },
          body: JSON.stringify({ name, email, password })
        }
        console.log(requestOption)
        fetch('http://localhost:8001/auth/register', requestOption)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.success) {
            setUserRegister(data)
            navigate("/")
          }else {
            setHasError(data.message)
          }
          setTimeout(() => {
            setIsLoading(false);
            console.log("Cargando")
          }, 5000)
        })
        .catch((err => {
          console.log('Hubo un error con el register', err.message)
          setIsLoading(false)
        }))
    }

    const nameHandler = (event) => {
        let a = event.target.value
        if (a.length === 0) {
            console.log("El usuario no puede estar vacio")
            setNameIsValid(false)
        }
        setNameIsValid(true)
        setName(a)
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
        setEmail(a.toString())
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

        if (!emailIsValid || !passwordIsValid || !nameIsValid){
            console.log("error en inputs")
            setEmail('')
            setPassword('')
            setName('')
            setEmailIsValid(false)
            setPasswordIsValid(false)
            setNameIsValid(false)
        } else {
            newUser(name, email, password)
            setName('')
            setEmail('')
            setPassword('')
            setNameIsValid(false)
            setEmailIsValid(false)
            setPasswordIsValid(false)
        }
    })

        return(     
            (props.isLoading)?
                <LoadingPage/>
                : 
            <Form className={Classes.MainContainer} onSubmit={submitHandler}>
                <img className={Classes.LogoRegister} src="Materials\LogoLogin.png" alt="" />                     
                    <div className={Classes.FormRegister}>
                    <p className={Classes.WelcomeBanner}>Ingresá tus datos! </p>
                    <div className={Classes.InputContainer}>
                        <Form.Group className={Classes.formName} controlId="formNameRegister">
                            <Form.Label className={Classes.Name}>Nombre</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitName}
                                type="text" 
                                placeholder="Ingresa tu Nombre"
                                onChange={nameHandler}
                                value={name}
                                required
                            />
                        </Form.Group>                   
                        <Form.Group className={Classes.formEmail} controlId="formEmailRegister">
                            <Form.Label className={Classes.Email}>Email</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitEmail}
                                type="email" 
                                placeholder="Ingresa tu Email" 
                                onChange={takeEmailHandler}
                                onBlur={emailHandler}
                                value={email}
                                required
                            />
                        </Form.Group>
                        <Form.Group className={Classes.formPassword} controlId="formPasswordRegister">
                            <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                            <Form.Control 
                                className={Classes.SubmitPassword}
                                type="password" 
                                placeholder="Ingresa tu Contraseña" 
                                onChange={passwordHandler}
                                value={password}
                                required
                            />
                        </Form.Group>
                    </div>
                    {hasError && <p className={Classes.Error}>{hasError}</p>}
                    <Button className={Classes.Register} type="submit">
                        Registrame
                    </Button>
                </div>
                <img className={Classes.Gif} src="\Materials\LoginGif.gif" alt="" />
          </Form>
    )
}

export default Register;