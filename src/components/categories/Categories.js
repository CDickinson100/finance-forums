import React, { useEffect, useState } from 'react';

export default function Categories() {

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

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            {
                categories.filter(value => {
                    return value.id !== 1;
                }).map((value) => {
                    return <div>
                        <a href={"/threadList/" + value.id}>
                            <button class={'section indent'}>
                                <h1>{value.category_name}</h1>
                            </button>
                        </a>
                    </div>
                })
            }
        </>
    )
}