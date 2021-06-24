import React, { useState } from 'react';
import './menu-sections.css';
import { BrowserRouter, Link } from 'react-router-dom'

function MenuSections() {
    //const [activeMenu, setActiveMenu] = useState(0);
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div class={'section'}>
                        <Link to="">
                            <button id="menuButton">
                                <h1>Home</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={'section'}>
                        <Link to="/topics">
                            <button id="menuButton">
                                <h1>Topics</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={'section'}>
                        <Link to="/forums">
                            <button id="menuButton">
                                <h1>Forum</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={'section'}>
                        <Link to="/support">
                            <button id="menuButton">
                                <h1>Support</h1>
                            </button>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default MenuSections;