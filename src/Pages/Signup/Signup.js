import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../firebase-config'
import Header from '../../components/Header/Header';
import './signup.scss'

function Signup() {
  useEffect(() => {
    document.title = "Certificio | Sign up";  
  }, []);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [username, setUsername] = useState("No username");

    const navigate = useNavigate();

    const signup = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword).catch((error) => {
            error.message.replace(".", "");
            alert(error.message + " (" + error.code + ")");
          });
          await updateProfile(auth.currentUser, { displayName: username }).catch((error) => {
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
        <div className='card signup-card'>
            <div className='card-wrapper'>
                <h1>Sign up</h1>
                {/* <div className='signup-alert alert' style={{border: "1px solid red"}}><b>Failed to Signup. Try again</b></div> */}
                <div className='group' id='signup-username'>
                    <input placeholder='Full name' type={"text"} required onChange={(event) => {setUsername(event.target.value)}} />
                </div>
                <div className='group' id='signup-email'>
                    <input placeholder='Email' type={"email"} required onChange={(event) => {setLoginEmail(event.target.value)}} />
                </div>
                <div className='group' id='signup-password'>
                    <input placeholder='Password' type={"password"} required onChange={(event) => {setLoginPassword(event.target.value)}} />
                </div>
                <button onClick={signup} id="signup-btn">Create an account</button>
                <div className='login-prompt'><p>Have an account? <Link to={"/login"}>Login</Link></p></div>

            </div>
        </div>
      </>
    )
}

export default Signup;