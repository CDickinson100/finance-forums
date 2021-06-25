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
                <div className="Dropdown">
                    <label htmlFor="categories"><h1>Thread category:</h1></label>
                    <select name="categories" id="categories">
                        {categories.map(value => {
                            return <option value={value.id}>{value.category_name}</option>
                        })}
                    </select>
                </div>
                <div className="titlebox">
                    <input type="text" placeholder="Enter a title" id="titlebox" name="titlebox" required />
                </div>
                <textarea name="text" cols="100" rows="20" id="content" placeholder={'Write content for the thread...'}>
                </textarea>
            </div>

            <div className="Button">
                <button type="submit" onClick={createThread}><h1>Create thread</h1></button>
            </div>
        </div>
    )
}