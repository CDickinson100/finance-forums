import React, {useEffect, useState} from 'react';

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
        <div id="thread">
            <h1>{thread[0].title}</h1>
            <p>{thread[0].content}</p>
        </div>
    )
}