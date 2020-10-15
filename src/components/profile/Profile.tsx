import React, { useContext } from 'react'
import './Profile.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'


export const Profile = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const reDirect = (url: string) => {
        history.push(url)
    }

    const logout = () => {
        localStorage.removeItem('email')
        setLoggedinUser()
        reDirect('/home')
    }

    return (
        <div className="profile-dropdown">
            <span>{loggedInUser}</span>
            <div className="profile-dropdown-content">
                <a onClick={() => reDirect('/recipe')}>Recipes</a>
                <a onClick={() => reDirect('/settings')}>Settings</a>
                <hr />
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}
