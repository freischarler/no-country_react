import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Navigate } from "react-router-dom"

const LoginScreen = () => {

    const [user, setUser]= useState("");
    const [password, setPassword]= useState("");

    const handleNameChange = (e) => {
        setUser(e.target.value);
      };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleLogin = () => {
        localStorage.setItem('user_id', JSON.stringify(user))
        return (<Navigate to="/" />);
    }

    return (
        <Formik>
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            
            <Field
                type="text"
                id="user"
                name="id"
                placeholder="id"
                className="form-control" 
                value={user}
                onChange={ handleNameChange }
            />

            <Field
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="form-control" 
                value={password}
                onChange={ handlePasswordChange }
            />

            <button
                className="btn btn-primary btn-block"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
        </Formik>
    )
}

export default LoginScreen;