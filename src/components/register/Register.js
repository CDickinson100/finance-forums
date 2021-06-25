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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': email,
                'firstName': firstName,
                'lastName': lastName,
                'password': password
            })
        };
        const response = await fetch('/registerUser', requestOptions);
        const body = await response.json();
        if (body.message) {
            document.getElementById("incorrect").innerHTML = body.message;
        } else {
            window.location = "/login";
        }
    }

    return (
        <div className="register">
            <div className="form">
                <h1>Register</h1>
                <input type="text" placeholder="Enter your email" id="email" name="email" required />
                <input type="text" placeholder="Enter your first name" id="firstName" name="firstName" required />
                <input type="text" placeholder="Enter your last name" id="lastName" name="lastName" required />
                <input type="password" placeholder="Enter your password" id="password" name="password" required />
            </div>



            <div className="Button">
                <button type="submit" onClick={create}><h1>Create account</h1></button>
            </div>

            <p id="incorrect" />

        </div>
    )
}