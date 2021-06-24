import bellIcon from '../../icons/bell.svg';
import "./header.css";
import {useEffect, useState} from "react";

export default function Header() {

    const [user, setUser] = useState(null)

    const [menu, setMenu] = useState(false);

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
                    <h1 id="name"><a href="/localhost:3000">Thrift</a></h1>
                </div>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for Topics"/>
                </div>

                <div class={user ? "notification" : "other-notification"}>
                    <img src={bellIcon} alt=""/>
                </div>
                {
                    user ?
                        <>
                            <button onClick={() => setMenu(!menu)}>
                                <div class="profile">
                                    <img src={user.avatar} alt="avatar"/>
                                </div>
                            </button>
                            {menu && <div className="menu">
                                <button onClick={() => {
                                    localStorage.removeItem("token");
                                    window.location = "/";
                                }}> Log Out
                                </button>
                            </div>
                            }
                        </>
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