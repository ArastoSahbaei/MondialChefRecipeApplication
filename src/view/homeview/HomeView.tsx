import React, { useEffect, useState } from 'react'
import './HomeView.css'

export const HomeView = () => {

    const [random, setRandom] = useState<any>("WonderWoman")

    useEffect(() => {
        const userName = localStorage.getItem("email")
        if (true) {
            alert("userName")
        }
    }, [random])

    return (
        <div className="homeContainer">
            <button onClick={() => setRandom("Hulk")}>Update the value of random state</button>
            <h1>This is the HomeView</h1>
            <h1>{random}</h1>
        </div>
    )
}
