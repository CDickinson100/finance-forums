import React, { useEffect, useState } from 'react';

import './Threadlist.css';
import MenuSections from "../homepage/menu/menu-sections";
import '../../fonts/fonts.css';

export default function ThreadList(props) {
    const { id } = props.match.params;

    const [threads, setThreads] = useState([]);

    async function getThreads() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
        <>
            <div className="menu">
                <MenuSections defaultCollapsed={true} />
            </div>
            <div className="threads">
                <div className="buttonCreate">
                    {localStorage.token &&
                        <button onClick={() => window.location = "/create"}>
                            <h1>Create Thread</h1>
                        </button>
                    }
                </div>

                <div class={'allThreads'}>
                    {
                        threads.map((value) => {
                            return <div className="thread">
                                <a href={"/threads/" + value.id}><h1 className="name">{value.title}</h1></a>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}