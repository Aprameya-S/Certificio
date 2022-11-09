import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../firebase-config'
import Header from '../../components/Header/Header'

function MultipleSignup() {
    const numberOfParticipants=2;
    const [participantsRegistered, setParticipantsRegistered] = useState(0);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [username, setUsername] = useState("Jack");

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
          setParticipantsRegistered(participantsRegistered + 1);
          if(participantsRegistered === numberOfParticipants){
            navigate('/');
          }
        //   navigate('/');
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <>
        <Header />
        <div id='multiple-signup'>
            
            <section id='ms-signup-section'>
            <h1>Signup</h1>
            {[...Array(numberOfParticipants),].map((value, participantNumber) => (
                <div key={participantNumber} className={`participant-${participantNumber+1} card signup-card`}>
                    <div className='card-wrapper'>
                        <h3>Participant {participantNumber+1}</h3>
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
                    </div>
                </div>
            ))}
            </section>
            <div className='login-prompt'><p>Have an account? <Link to={"/login"}>Login</Link></p></div>

        </div>
        </>  
    )
}

export default MultipleSignup;