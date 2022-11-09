import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../firebase-config'
import Header from '../../components/Header/Header';
import './login.scss'

function Login() {
    useEffect(() => {
        document.title = "Certificio | Login";  
    }, []);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    // onAuthStateChanged(auth, (currentUser) => {
    //     setNewUser(currentUser)
        
    // })

    const login = async () => { 
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword).catch((error) => {
            error.message.replace(".", "");
            alert(error.message + " (" + error.code + ")");
        });
          navigate('/');
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <>
        <Header />
        <div className='card login-card'>
            <div className='card-wrapper'>
                <h1>Log In</h1>
                {/* <div className='login-alert alert' style={{border: "1px solid red"}}><b>Failed to Log in. Try again</b></div> */}
                <div className='group' id='login-email'>
                    <input placeholder='Email' type={"email"} required onChange={(event) => {setLoginEmail(event.target.value)}} />
                </div>
                <div className='group' id='login-password'>
                    <input placeholder='Password' type={"password"} required onChange={(event) => {setLoginPassword(event.target.value)}} />
                    <div className='forgot-password'><Link to={"/forgot-password"}>Forgot Password?</Link></div> 
                </div>
                <div className='login-button-and-link'>
                    <button onClick={login} id="login-btn">Log In</button>
                    <div><Link to={"/signup"}>Sign Up</Link></div>   
                </div>
            </div>
            {/* <div>User: {newUser.email}</div> */}
            {/* <Logout /> */}
        </div>
        </>
    )
}

export default Login;