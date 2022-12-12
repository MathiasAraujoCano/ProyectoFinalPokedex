import React from "react";
import Classes from "../Register/Register.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = (props) => {

        return(
           
           <Form >
                <img className={Classes.LogoRegister} src="Materials\LogoLogin.png" alt="" />                     
                    <div className={Classes.FormRegister}>
                    <Form.Group className={Classes.formName} controlId="formEmail">
                        <Form.Label className={Classes.Name}>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </Form.Group>                   

                    <Form.Group className={Classes.formEmail} controlId="formEmail">
                        <Form.Label className={Classes.Email}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar Email" />
                    </Form.Group>
                    
                    <Form.Group className={Classes.formPassword} controlId="formPassword">
                        <Form.Label className={Classes.Contraseña}>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    
                    <Button className={Classes.Register} type="submit">
                        Registrate!
                    </Button>
                    </div>
          </Form>
    )
}

export default Register;