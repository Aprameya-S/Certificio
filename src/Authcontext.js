import React, {useContext, useState} from 'react';
import {auth} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.create
    }

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
