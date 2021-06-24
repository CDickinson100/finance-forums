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

                </div>

                <div class="notification">

                </div>

                <div class="profile">
                    <BrowserRouter>
                        <Link to="/test">
                            <button>

                            </button>
                        </Link>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}

export default Header;