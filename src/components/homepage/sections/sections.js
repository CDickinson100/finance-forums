import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./sections.css"

function Section() {
    return (
        <>

            <BrowserRouter>
                <Link to="/topic">
                    <div id="section">

                        <div id="title">

                        </div>

                        <div id="description">

                        </div>

                        <div id="date">

                        </div>

                    </div>
                </Link>
            </BrowserRouter>

        </>
    )
}

export default Section;