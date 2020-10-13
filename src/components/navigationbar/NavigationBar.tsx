import React from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBarContainer">
            <span onClick={() => history.push("/")}>Mondial Chef</span> <br />
            <input></input>
            <span onClick={() => history.push("/signin")}>Sign In</span>
        </div>
    )
}
