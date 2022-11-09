import React from 'react';
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase-config'


function Logout() {
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        navigate('/login'); 
    };
    

    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Logout;