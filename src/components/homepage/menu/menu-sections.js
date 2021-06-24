import React, { useState } from 'react';
import './menu-sections.css'
import { BrowserRouter, Link } from 'react-router-dom'

function MenuSections() {
    const [activeMenu, setActiveMenu] = useState(0);
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div class={activeMenu === 0 ? 'active-section' : 'section'}>
                        <Link to="">
                            <button id="menuButton" onClick={setActiveMenu(0)}>
                                <h1>Home</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={activeMenu === 1 ? 'active-section' : 'section'}>
                        <Link to="/topics">
                            <button id="menuButton" onClick={setActiveMenu(1)}>
                                <h1>Topics</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={activeMenu === 2 ? 'active-section' : 'section'}>
                        <Link to="/forums">
                            <button id="menuButton" onClick={setActiveMenu(2)}>
                                <h1>Forum</h1>
                            </button>
                        </Link>
                    </div>

                    <div class={activeMenu === 3 ? 'active-section' : 'section'}>
                        <Link to="/support">
                            <button id="menuButton" onClick={setActiveMenu(3)}>
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