import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


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

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <div>
            {
            !user &&
            <div>
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                <button onClick={submit}>Create account</button>
                <button onClick={login}>Login</button>
            </div>
            }
            {
            user && <button onClick= {logout}>Logout</button>
            }
        </div>
     );
}
 
export default Login;