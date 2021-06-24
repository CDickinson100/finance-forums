import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./forum1.css";
import reply from "../../icons/replies.jpg"

function Forum1Home() {
    const number = ' 8201';

    return (
        <>

            <BrowserRouter>
                <Link to="/topic">
                    <div class="topicList3">

                        <div class="leftBox3">
                            <div id="forumTitle">
                                <h3> Buying my first car </h3>
                            </div>
                        </div>

                        <div id="rightBox3">
                            <div id="forumDate">
                                <br />
                                <text id="middle">
                                    18hrs ago
                                </text>
                            </div>
                        </div>

                    </div>
                </Link>
            </BrowserRouter>

        </>
    )
}

export default Forum1Home;