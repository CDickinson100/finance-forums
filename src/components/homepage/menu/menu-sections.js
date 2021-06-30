import React, { useState } from 'react';
import './menu-sections.css';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../../categories/Categories';

function MenuSections(props) {
    var { defaultCollapsed } = props;
    const [activeMenu, setActiveMenu] = useState(0);
    const [showCategories, setShow] = useState(defaultCollapsed);
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div>
                        <a href='/'>
                            <button onClick={() => setActiveMenu(0)}
                                class={activeMenu === 0 ? 'active-section' : 'section'}>
                                <div class={'bar'} />
                                <h1>Home</h1>
                            </button>
                        </a>
                    </div>

                    <div>
                        <a>
                            <button onClick={() => {
                                setActiveMenu(1);
                                setShow(!showCategories)
                            }} class={activeMenu === 1 ? 'active-section' : 'section'}>
                                <div class={'bar'} />
                                <h1>Categories</h1>
                            </button>
                        </a>
                    </div>

                    {showCategories ?
                        <Categories />
                        : <></>}

                    <div>
                        <a href="/topics">
                            <button onClick={() => setActiveMenu(2)}
                                class={activeMenu === 2 ? 'active-section' : 'section'}>
                                <div class={'bar'} />
                                <h1>Articles</h1>
                            </button>
                        </a>
                    </div>

                    <div>
                        <a href="/support">
                            <button onClick={() => setActiveMenu(3)}
                                class={activeMenu === 3 ? 'active-section' : 'section'}>
                                <div class={'bar'} />
                                <h1>Support</h1>
                            </button>
                        </a>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default MenuSections;
