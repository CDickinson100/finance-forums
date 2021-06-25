import React, { useEffect, useState } from 'react';
import './CreateThread.css';

export default function CreateThread() {

    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('/getCategories', requestOptions);
        const body = await response.json();
        setCategories(body);
    }

    async function createThread() {
        const title = document.getElementById('titlebox').value;
        const content = document.getElementById('content').value;
        const category = document.getElementById('categories').value;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'token': localStorage.token,
                'title': title,
                'content': content,
                'category': category
            })
        };
        const response = await fetch('/createThread', requestOptions);
        window.location = "/";
    }

    useState(() => {
        getCategories();
    }, [])

    return (
        <div className="createThread">
            <div className="form">
                <br></br>
                <div className="Dropdown">
                    <label htmlFor="categories">Thread category:</label>
                    <select name="categories" id="categories">
                        {categories.map(value => {
                            return <option value={value.id}>{value.category_name}</option>
                        })}
                    </select>
                </div>
                <div className="titlebox">
                    <br></br>
                    <label htmlFor="title"><b>Title</b></label>
                    <br></br>
                    <input type="text" placeholder="Enter a title" id="titlebox" name="titlebox" required />
                </div>
                <br />
                <label htmlFor="content"><b>Content</b></label>
                <br />
                <textarea name="text" cols="100" rows="20" id="content" placeholder={'Write content for the thread...'}>
                </textarea>
            </div>

            <div className="Button">
                <button type="submit" onClick={createThread}>Create Thread</button>
            </div>
        </div>
    )
}