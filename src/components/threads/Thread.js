import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import MenuSections from "../homepage/menu/menu-sections";
import Comments from "../comments/Comments";
import './Thread.css';
import Reactions from "../reactions/Reactions";

export default function Thread(props) {
    const {id} = props.match.params;

    const [thread, setThread] = useState([]);

    async function getThread() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'id': id
            })
        };
        const response = await fetch('/getThread', requestOptions);
        const body = await response.json();
        setThread(body);
    }

    useEffect(() => {
        getThread();
    }, [])

    return thread.length === 1 && (
        <>
            <div className="menu">
                <MenuSections defaultCollapsed={true}/>
            </div>
            <div id="thread">
                <h1>{thread[0].title}</h1>
                <ReactMarkdown>{thread[0].content}</ReactMarkdown>
                <Reactions id={id}/>
            </div>
            <Comments id={id}/>
        </>
    )
}