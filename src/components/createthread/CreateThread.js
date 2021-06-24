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
        <div className="titlebox">
        <br></br>
            <label htmlFor="title"><b>Title</b></label>
            <br></br>
            <input type="text" placeholder="Enter Title" id="titlebox" name="titlebox" required/>
            </div>
            <br/>
            <label htmlFor="content"><b>Content</b></label>
            <br/>
            <textarea name="text" cols="65" rows="5" id="content">
            </textarea>
            </div>

            <div className="Button">
            <button type="submit" onClick={createThread}>Login</button>
            </div>
        </div>
    )
}