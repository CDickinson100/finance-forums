import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./sections.css";

function Section() {
    return (
        <>

            <BrowserRouter>
                <Link to="/topic">
                    <div class="topicList">

                        <div class="left">
                            <div id="title">
                                <h3>Title</h3>
                            </div>

                            <div id="description">
                                <h4>Description</h4>
                            </div>
                        </div>

                        <div id="dataBox">
                            <div id="date">
                                <h4>Date</h4>
                            </div>
                        </div>

                    </div>
                </Link>
            </BrowserRouter>

        </>
    )
}

export default Section;