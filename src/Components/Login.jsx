import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import logoImage from '../assets/image/logoBurgerixtli.png';
import Products from './Products';
import menu from '../data/menu'

const Login = ({setisLoggin, isLoggin}) => {
    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');

    const firebase= useFirebaseApp();
    const user = useUser();


    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    //Observador de estado
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setisLoggin(true)
        } else {
            setisLoggin(false)
        }
    });

    return ( 
        <div className="login-container">
            {
            !user &&
            <div className="login-input">
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
                  <Products detail= {menu.burgers} />
                </div>
            }
        </div>
     );
}
 
export default Login;