import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./topic1.css";

function Topic1Home() {

    const text = "   - What are pensions?"
    const text2 = "   - Why do I need a pension?"
    const text3 = "   - What makes saving into a pension so tax-efficient?"
    const text4 = "   - How do I access my money?"
    return (
        <>

            <div class="topicList1">

                <div class="leftBox1">
                    <div id="pensionTitle">
                        <h3>Pensions</h3>
                    </div>

                    <div id="pensionDescription">
                        {text}
                        {<br />}
                        {text2}
                        {<br />}
                        {text3}
                        {<br />}
                        {text4}
                    </div>
                </div>

                <div id="rightBox1">
                    <div id="pensionDate">
                        <br />
                        <br />
                        <br />
                        <br />
                        <text id="date">April 14, 2020</text>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Topic1Home;