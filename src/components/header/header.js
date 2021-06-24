import bellIcon from '../../icons/bell.svg';

import "./header.css";
import {useState} from "react";

export default function Header() {

    const token = "1xq2fjn6ih3lbww9ofb85r";

    const [user, setUser] = useState(null);

    async function getDetails() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'token': token
            })
        };

        const response = await fetch('/getUserDetails', requestOptions);
        const body = await response.json();
        setUser(body[0]);
    }

    getDetails();

    return (
        <>
            <div class="header">

                <div class="title">
                    <h1 id="name">forum title</h1>
                </div>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for Topics"/>
                </div>

                <div class="notification">
                    <img src={bellIcon} alt=""/>
                </div>
                {
                    user ?
                        <div className="profile">
                            <button id="profileButton">
                                <img src={user.avatar}/>
                            </button>
                        </div>
                        :
                        <>
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </>
                }
            </div>
        </>
    )
}