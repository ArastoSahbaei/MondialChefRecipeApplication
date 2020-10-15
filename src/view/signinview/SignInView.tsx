import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'

export const SignInView = () => {
    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState<any>()
    const [loginPassword, setLoginPassword] = useState<any>()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const login = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail)
        alert(loginEmail + " Has logged in")
        history.push('/home')
    }

    return (
        <div>
            <h1>Login credentials:</h1>
            <span>Email:</span><input onChange={e => setLoginEmail(e.target.value)} /> <br />
            <span>Password:</span><input onChange={e => setLoginPassword(e.target.value)} /> <br />
            <button onClick={() => login()}>Login</button>
        </div>
    )
}
