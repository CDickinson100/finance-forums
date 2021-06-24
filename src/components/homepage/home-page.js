import React, {useEffect, useState} from 'react';
import "./home-page.css"
import MenuSections from "./menu/menu-sections";
import ReactMarkdown from "react-markdown";
import RecentlyViewed from '../side-bar/recent';

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
                    <MenuSections defaultCollapsed={false}/>
                </div>

                <div class="news">
                    {
                        threads.map((value) => {
                            return <div>
                                <h1>{value.title}</h1>
                                <ReactMarkdown>{value.content}</ReactMarkdown>
                            </div>
                        })
                    }
                </div>

                <div class="side">
                    <div id="recent">
                        <RecentlyViewed/>
                    </div>
                </div>
            </div>

        </>
    )
}
