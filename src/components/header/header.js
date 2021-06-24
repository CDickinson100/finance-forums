import bellIcon from '../../icons/bell.svg';

import { BrowserRouter, Link } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <>
            <div class="header">

                <div class="title">
                    <h1 id="name"> Title </h1>
                </div>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for Topics" />
                </div>

                <div class="notification">
                    <img src={bellIcon} alt="" />
                </div>

                <div class="profile">
                    <BrowserRouter>
                        <Link to="/">
                            <button id="profileButton">
                                Profile
                            </button>
                        </Link>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}

export default Header;