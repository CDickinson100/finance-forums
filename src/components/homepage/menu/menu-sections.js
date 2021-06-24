import React from 'react';
import './menu-sections.css'
import { BrowserRouter, Link } from 'react-router-dom'

function MenuSections() {
    return (
        <>
            <BrowserRouter>
                <div class="menuFrame">
                    <div class="topSection">
                        <Link to="">
                            <button id="home">
                                <h1> Home </h1>
                            </button>
                        </Link>
                    </div>

                    <div class="section">
                        <Link to="">
                            <button id="home">
                                <h1> Topics </h1>
                            </button>
                        </Link>
                    </div>

                    <div class="section">
                        <Link to="">
                            <button id="home">
                                <h1> Forum </h1>
                            </button>
                        </Link>
                    </div>

                    <div class="section">
                        <Link to="">
                            <button id="home">
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