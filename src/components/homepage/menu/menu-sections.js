import React, { useState } from 'react';
import './menu-sections.css';
import { BrowserRouter, Link } from 'react-router-dom';

function MenuSections() {
    const [activeMenu, setActiveMenu] = useState();
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div>
                        <Link to="">
                            <button onClick={() => setActiveMenu(0)} class={activeMenu === 0 ? 'active-section' : 'section'}>
                                <h1>Home</h1>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/categories">
                            <button onClick={() => setActiveMenu(1)} class={activeMenu === 1 ? 'active-section' : 'section'}>
                                <h1>Categories</h1>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/topics">
                            <button  onClick={() => setActiveMenu(2)} class={activeMenu === 2 ? 'active-section' : 'section'}>
                                <h1>Articles</h1>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/support">
                            <button  onClick={() => setActiveMenu(3)} class={activeMenu === 3 ? 'active-section' : 'section'}>
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
