import React, { useState } from 'react'

export const Test = () => {

    const [userName, setUserName] = useState("Arasto");
    const [recipe, setRecipe] = useState("");

    return (
        <>
            <h1 onClick={() => setUserName("Tarek")}> {userName}</h1>
            <h1> {recipe} </h1>
            <button onClick={() => setRecipe("Hamburger")}>Update the value of recipe state</button>
        </>
    )
}
