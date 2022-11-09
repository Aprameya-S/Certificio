import { Navigate } from 'react-router-dom';
import {auth} from '../firebase-config'
import { onAuthStateChanged } from "firebase/auth"
import { useState } from 'react';

export const PrivateRoute = ({Component}) => {
    const [newUser, setNewUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setNewUser(currentUser)
    })

    return newUser ? <Component /> : <Navigate to="/login" />
}
