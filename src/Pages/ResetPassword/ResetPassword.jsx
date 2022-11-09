import React, { useState, useEffect } from 'react';
import { sendPasswordResetEmail } from "firebase/auth"
import { Link } from 'react-router-dom';
import {auth} from '../../firebase-config'
import './resetpassword.scss'
import Header from '../../components/Header/Header';

function ResetPassword() {
    useEffect(() => {
        document.title = "Certificio | Reset Password";  
      }, []);

    const [resetPasswordEmail, setResetPasswordEmail] = useState("");
    

    const resetPassword = async () => {
        try {
            const reset = await sendPasswordResetEmail(auth, resetPasswordEmail).catch((error) => {
              error.message.replace(".", "");
              alert(error.message + " (" + error.code + ")");
            });
            alert("Password reset link sent successfully. Please check your mail");
          } catch (error) {
            error.message.replace(".", "");
            alert(error.message + " (" + error.code + ")");
          }
    };
    

    return (
        <>
        <Header />
        <div className='card reset-password-card'>
            <div className='card-wrapper'>
                <h1>Reset Password</h1>
                <div className='group' id='reset-password-email'>
                    <input placeholder='Email' type={"email"} required onChange={(event) => {setResetPasswordEmail(event.target.value)}} />
                </div>
                <div className='rest-password-button-and-link'>
                <button onClick={resetPassword} id="reset-password-btn">Reset Password</button>
                <div><Link to={"/login"}>Login</Link></div>            
                </div>

            </div>
        </div>
        </>
    )
}

export default ResetPassword;
