import React, {useEffect, useState} from 'react';
import like from '../../icons/like.png';
import './Reactions.css';

export default function Reactions(props) {
    const {id} = props;

    const [reactions, setReactions] = useState([]);

    async function getReactions() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'id': id
            })
        };
        const response = await fetch('/getThreadReactions', requestOptions);
        const body = await response.json();
        setReactions(body);
    }

    async function addReaction() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'threadID': id,
                'token': localStorage.token,
                'reaction': "like"
            })
        };
        const response = await fetch('/addThreadReactions', requestOptions);
        getReactions();
    }

    useEffect(() => {
        getReactions();
    }, [])

    return localStorage.token ? (
        <div className="reaction">
            <button onClick={() => addReaction()}>
                <img src={like} height="30px"/>
                {
                    reactions.length > 0 &&
                    <>
                        <p>{reactions.length}</p>
                    </>
                }
            </button>
        </div>
    ):null;
}