import React from 'react';
import './Login.css';

export default function Login() {

    async function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        };
        const response = await fetch('/login', requestOptions);
        const body = await response.json();
        if(body.message){
            document.getElementById("incorrect").innerHTML = body.message;
        }else{
            alert(body.token);
        }
    }

    return (
        <div className="login">
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" id="email" name="email" required/>

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" name="password" required/>

            <p id="incorrect"/>
            <button type="submit" onClick={login}>Create Account</button>
        </div>
    )
}