import React, {useEffect, useState} from 'react';
import './CreateThread.css';

export default function CreateThread() {
    async function createThread() {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'token': localStorage.token,
                'title': title,
                'content': content,
                'category': 1
            })
        };
        const response = await fetch('/createThread', requestOptions);
        window.location = "/";
    }

    return (
        <div className="createThread">
        <div className="form">
            <label htmlFor="title"><b>Title</b></label>
            <input type="text" placeholder="Enter Title" id="title" name="title" required/>
            <br/>
            <label htmlFor="content"><b>Content</b></label>
            <br/>
            <textarea name="text" cols="25" rows="5" id="content">
            </textarea>
            </div>

            <div className="Button">
            <button type="submit" onClick={createThread}>Login</button>
            </div>
        </div>
    )
}