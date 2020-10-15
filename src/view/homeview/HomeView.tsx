import React, { useContext } from 'react'
import './HomeView.css'
import { UserContext } from '../../utils/context/UserContext'

export const HomeView = () => {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    return (
        <div className="homeContainer">
            <h1>Currently logged in user: {loggedInUser}</h1>
            <h1>This is the HomeView</h1>
        </div>
    )
}
