import React, {useEffect, useState} from 'react';
import './Categories.css'

export default function Categories() {

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

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="Categories">
            <center>
                {
                    categories.filter(value => {
                        return value.category_name !== "news";
                    }).map((value) => {
                        return <div className="category">
                            <a href={"/threadList/" + value.id}><h1>{value.category_name}</h1></a>
                        </div>
                    })
                }
            </center>
        </div>
    )
}