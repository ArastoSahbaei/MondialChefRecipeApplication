import React from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBarContainer">
            <span className="navigationBarLogotype" onClick={() => history.push("/")}>Mondial Chef</span> <br />
            <input></input>
            <span className="signin" onClick={() => history.push("/signin")}>Sign In</span>
        </div>
    )
}
