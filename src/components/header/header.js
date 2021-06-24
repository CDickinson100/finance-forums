import { BrowserRouter, Link } from "react-router-dom";
import "./header.css";
import bellIcon from '../../icons/bell.svg';

function Header() {
    return (
        <>
            <div class="header">
                <div class="title">
                    <h1 id="name">forum title</h1>
                </div>

                <div class="searchbar">
                    <input type="search" id="search" name="search" placeholder="Search for Topics" />
                </div>

                <div class="notification"> 
                    <img src={bellIcon} alt="" />
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