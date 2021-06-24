import bellIcon from '../../icons/bell.svg';
import "./header.css";
import {useEffect, useState} from "react";

export default function Header() {

    const [user, setUser] = useState(null);

    async function getDetails() {
        if (localStorage.token) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'token': localStorage.token
                })
            };

            const response = await fetch('/getUserDetails', requestOptions);
            const body = await response.json();
            setUser(body[0]);
        }
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <>
            <div class="header">

                <div class="title">
                    <h1 id="name">Thrift</h1>
                </div>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for Topics"/>
                </div>

                <div class="notification">
                    <img src={bellIcon} alt=""/>
                </div>
                {
                    user ?
                        <div class="profile">
                            <button id="profileButton">
                                <img src={user.avatar}/>
                            </button>
                        </div>
                        :
                        <div class="profileActions">
                            <a href="/login" class="loginButton">Login</a>
                            <a href="/register" class="registerButton">Register</a>
                        </div>
                }
            </div>
        </>
    )
}