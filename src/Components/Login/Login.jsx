import React from "react";

const Login = (props) => {

    return(
        <div className="Login">
            <img className="LogoLogin" src="Materials\LogoLogin.png" alt="" />
            <div className="MainLogin">
                <p className="pokeball"></p>
                <form className="Inputs">
                    <label>
                        <input className="InputLogin" type="email" name="Email"/>
                        <input className="InputLogin" type="password" name="Contraseña" />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Login;