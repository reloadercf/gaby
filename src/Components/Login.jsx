import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import NavBar from './NavBar';
import logoImage from '../assets/image/logoBurgerixtli.png';


const Login = () => {
    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');

    const firebase= useFirebaseApp();
    const user= useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return ( 
        <div className="login-container">
            {
            !user &&
            <div className='login-input'>
                <div className="logo-circle">
                    <img src={logoImage} className="App-logo" alt="logo" />
                </div> 
                
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                <button onClick={submit}>Create account</button>
                <button onClick={login}>Login</button>
            </div>
            }
            {
                user && 
                    <div> 
                        <NavBar /> 
                    </div>
            }
        </div>
     );
}
 
export default Login;