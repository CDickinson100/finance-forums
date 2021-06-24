import React from 'react';
import './Register.css';

export default function Register() {

    async function create() {
        const email = document.getElementById('email').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const password = document.getElementById('password').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': email,
                'firstName': firstName,
                'lastName': lastName,
                'password': password
            })
        };
        const response = await fetch('/registerUser', requestOptions);
        const body = await response.json();
        if(body.message){
            document.getElementById("incorrect").innerHTML = body.message;
        }else{
            window.location = "/login";
        }
    }

    return (
        <div className="register">
        <br></br>
        <div className="form">
        <br></br>
            <h1>Register</h1>
            <br></br>
            <br></br>
            <label htmlFor="email"><b>Email</b></label>
            <br></br>
            <input type="text" placeholder="Enter Email" id="email" name="email" required/>
            <br></br>

            <label htmlFor="firstName"><b>First Name</b></label>
            <br></br>
            <input type="text" placeholder="First Name" id="firstName" name="firstName" required/>
            <br></br>

            <label htmlFor="lastName"><b>Last Name</b></label>
            <br></br>
            <input type="text" placeholder="Last Name" id="lastName" name="lastName" required/>
            <br></br>

            <label htmlFor="password"><b>Password</b></label>
            <br></br>
            <input type="password" placeholder="Enter Password" id="password" name="password" required/>
            <br></br>

            </div>

            <p id="incorrect"/>

            <div className="Button">
            <button type="submit" onClick={create}>Create Account</button>
            </div>

        </div>
    )
}