import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import './Comments.css';

export default function Comments(props) {
    const {id} = props;
    const [comments, setComments] = useState([]);

    async function postComment() {
        const content = document.getElementById('content').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'token': localStorage.token,
                'content': content,
                'thread': id
            })
        };
        const response = await fetch('/addThreadComment', requestOptions);
        getComments();
        document.getElementById('content').value = "";
    }

    async function getComments() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'threadID': id
            })
        };
        const response = await fetch('/getThreadComments', requestOptions);
        const body = await response.json();
        setComments(body);
    }


    useEffect(() => {
        getComments();
    }, [])

    return (
        <div className="comments">
            {
                comments.map(value => {
                    return <div className="comment">
                        <ReactMarkdown>{value.content}</ReactMarkdown>
                    </div>
                })
            }
            <textarea name="text" cols="65" rows="5" id="content"/>

            <button onClick={() => postComment()}>
                Post Comment
            </button>
        </div>
    )
}