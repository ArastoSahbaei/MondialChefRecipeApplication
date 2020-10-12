import React from 'react'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBar">
            <span onClick={() => history.push("/home")}>Home</span> <br />
            <span onClick={() => history.push("/recipe")}>Recipe</span>
        </div>
    )
}
