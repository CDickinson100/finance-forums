import bellIcon from '../../icons/bell.svg';
import iress from '../../icons/iress-purple.svg';
import "./header.css";
import { useEffect, useState } from "react";

export default function Header() {

    const [user, setUser] = useState(null)

    const [menu, setMenu] = useState(false);

    async function getDetails() {
        if (localStorage.token) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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

                <a href="/">
                    <div class="title">

                        <div class="logo">

                            <img class="inline" src={iress} alt="" />

                        </div>
                        <h1 id="mainHeading">Thrift</h1>
                    </div>
                </a>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for topics" />
                </div>

                <div class={user ? "notification" : "other-notification"}>
                    <img src={bellIcon} alt="" />
                </div>
                {
                    user ?
                        <>
                            <div className="profile">
                                <button onClick={() => setMenu(!menu)}>
                                    <img src={user.avatar} alt="avatar" />
                                </button>
                            </div>
                            {menu && <div className="logout-menu">
                                <button onClick={() => {
                                    localStorage.removeItem("token");
                                    window.location = "/";
                                }}><div class="point"></div> Log out
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