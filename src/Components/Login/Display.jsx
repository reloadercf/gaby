import React from 'react';
import logoImage from '../../assets/image/logoBurgerixtli.png';

//<button onClick={login}>Login</button>
function Display(setEmail,setPassword,submit,login) {
    return (
        <div className="login-input">
                <div className="logo-circle">
                    <img src={logoImage} className="App-logo" alt="logo" />
                </div> 
                
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                <button onClick={submit}>Create account</button>
                
        </div>
    );
}

export default Display;