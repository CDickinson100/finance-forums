import React, {useEffect, useState} from 'react';
import "./home-page.css"
import MenuSections from "./menu/menu-sections";
import ReactMarkdown from "react-markdown";

export default function HomeUI() {

    const [threads, setThreads] = useState([]);

    async function getThreads() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'category': 1
            })
        };
        const response = await fetch('/getThreads', requestOptions);
        const body = await response.json();
        setThreads(body);
    }

    useEffect(() => {
        getThreads();
    }, [])

    return (
        <>
            <div class="home">
                <div class="menu">
                    <MenuSections/>
                </div>

                <div class="topics">
                    <center>
                        {
                            threads.map((value) => {
                                return <div className="thread">
                                    <div id="thread">
                                        <h1>{value.title}</h1>
                                        <ReactMarkdown>{value.content}</ReactMarkdown>
                                    </div>
                                </div>
                            })
                        }
                    </center>
                </div>

                <div class="news">

                </div>
            </div>

        </>
    )
}
