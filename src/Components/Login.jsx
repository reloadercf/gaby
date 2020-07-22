import React, { useState } from 'react';
import 'firebase/auth';


import Products from './Products';
import menu from '../data/menu'
import Display from './Login/Display'

const Login = ({setisLoggin,firebase,user}) => {
    
    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');

    


    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    //Observador de estado
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         setisLoggin(true)
            
    //     } else {
    //         setisLoggin(false)
    //     }
    // });

    return ( 
        <div className="login-container">
            Login
            {
            !user &&
            <Display 
            setEmail={setEmail}
            setPassword={setPassword}
            submit={submit}
            login={login}
            />
            }
            {
            user &&
                <div> 
                  <Products 
                  setisLoggin={setisLoggin}
                  detail= {menu.burgers} />
                </div>
            }
        </div>
     );
}
 
export default Login;