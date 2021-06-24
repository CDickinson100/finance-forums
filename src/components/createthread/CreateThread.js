import React, {useEffect, useState} from 'react';
import './CreateThread.css';

export default function CreateThread() {

    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
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
            headers: {'Content-Type': 'application/json'},
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
                <label htmlFor="categories">Choose a Category:</label>
                <select name="categories" id="categories">
                    {categories.map(value => {
                        return <option value={value.id}>{value.category_name}</option>
                    })}
                </select>
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