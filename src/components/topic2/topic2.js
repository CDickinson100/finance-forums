import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./topic2.css";

function Topic2Home() {

    const text = '   - What is Risk Management?'
    const text2 = '   - Good, Bad and Necessary Risk'
    const text3 = '   - Active and Passive Risk Management'

    return (
        <>

            <BrowserRouter>
                <Link to="/topic">
                    <div class="topicList2">

                        <div class="leftBox2">
                            <div id="riskTitle">
                                <h3>Risk Management in Finance</h3>
                            </div>

                            <div id="riskDescription">
                                {text}
                                {<br />}
                                {text2}
                                {<br />}
                                {text3}
                            </div>
                        </div>

                        <div id="rightBox2">
                            <div id="riskDate">
                                <h4>Date</h4>
                            </div>
                        </div>

                    </div>
                </Link>
            </BrowserRouter>

        </>
    )
}

export default Topic2Home;