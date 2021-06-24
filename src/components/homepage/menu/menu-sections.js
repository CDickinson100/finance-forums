import React from 'react';
import './menu-sections.css'
import { BrowserRouter, Link } from 'react-router-dom'

function MenuSections() {
    return (
        <>
            <BrowserRouter>
                <div class="section">
                    <Link to="">
                        <button id="home">
                            <h1> Home </h1>
                        </button>
                    </Link>

                    <Link to="">
                        <button id="home">
                            <h1> Home </h1>
                        </button>
                    </Link>

                    <Link to="">
                        <button id="home">
                            <h1> Home </h1>
                        </button>
                    </Link>

                    <Link to="">
                        <button id="home">
                            <h1> Home </h1>
                        </button>
                    </Link>
                </div>

            </BrowserRouter>
        </>
    )
}

export default MenuSections;