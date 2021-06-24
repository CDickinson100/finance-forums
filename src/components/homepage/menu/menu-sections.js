import React, { useState } from 'react';
import './menu-sections.css';
import { BrowserRouter, Link } from 'react-router-dom';

function MenuSections() {
    const [activeMenu, setActiveMenu] = useState();
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div class={activeMenu === 0 ? 'active-section' : 'section'}>
                        <Link to="">
                            <button id="menuButton" onClick={() => setActiveMenu(0)}>
                                <h1>Home</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={activeMenu === 1 ? 'active-section' : 'section'}>
                        <a href="/categories">
                            <button id="menuButton" onClick={() => setActiveMenu(1)}>
                                <h1>Categories</h1>
                            </button>
                        </a>
                    </div>

                    <div class="section">
                        <Link to="/topics">
                            <button id="menuButton">
                                <h1> Articles </h1>
                            </button>
                        </Link>
                    </div>

                    <div class="section">
                        <Link to="/support">
                            <button id="menuButton">
                                <h1> Support </h1>
                            </button>
                        </Link>
                    </div>

                </div>
            </BrowserRouter>
        </>
    )
}

export default MenuSections;
