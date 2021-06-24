import React, {useEffect, useState} from 'react';

export default function ThreadList(props) {
    const {id} = props.match.params;

    const [threads, setThreads] = useState([]);

    async function getThreads() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'category': id
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
        <div className="Threads">
            <center>
                {
                    threads.map((value) => {
                        return <div className="thread">
                            <a href={"/threads/"+value.id}><h1>{value.title}</h1></a>
                        </div>
                    })
                }
            </center>
        </div>
    )
}