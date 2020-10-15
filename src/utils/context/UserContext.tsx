import React, { useState, createContext } from 'react'

export const UserContext = createContext<any>(null)
export const UserProvider = (props: any) => {

    const [loggedInUser, setLoggedInUser] = useState("")

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
