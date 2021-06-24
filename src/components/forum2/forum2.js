import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./forum2.css";

function Forum2Home() {

    return (
        <>

            <BrowserRouter>
                <Link to="/topic">
                    <div class="topicList4">

                        <div class="leftBox4">
                            <div id="forum2Title">
                                <h3> Student Loan Problems </h3>
                            </div>
                        </div>

                        <div id="rightBox4">
                            <div id="forum2Date">
                                <h4>Date</h4>
                            </div>
                        </div>

                    </div>
                </Link>
            </BrowserRouter>

        </>
    )
}

export default Forum2Home;