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
                        <a href="/categories">
                            <button id="menuButton">
                                <h1>Categories</h1>
                            </button>
                        </a>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default MenuSections;