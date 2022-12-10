import React from "react";
import Classes from "../Login/Login.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {

        return(
           
           <Form >
                <img className={Classes.LogoLogin} src="Materials\LogoLogin.png" alt="" />            
                    
                    <div className={Classes.FormLogin}>
                    <Form.Group className={Classes.formEmail} controlId="formEmail">
                        <Form.Label className={Classes.Email}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar Email" />
                    </Form.Group>
                    
                    <Form.Group className={Classes.formPassword} controlId="formPassword">
                        <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    
                    <Button className={Classes.LoginIniciar} type="submit">
                        Iniciar Sesión
                    </Button>
                    <br>
                    </br>
                    <Button className={Classes.Registrarse} type="submit">
                        Registrarse!
                    </Button>
                    </div>
          </Form>
    )
}

export default Login;