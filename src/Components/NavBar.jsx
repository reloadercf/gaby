import React from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const NavBar = () => {
    const firebase= useFirebaseApp();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <nav>
            <Link exact to="/">
            <span style={{padding: "10px"}}>Login</span>
            </Link>
            <Link to="Products">
                <span style={{padding: "10px"}}>Menu</span>
            </Link>
            <span onClick = {logout} style={{padding: "10px", textDecoration: "underline", cursor: "pointer"}}>logout</span>
        </nav>
     );
}
 
export default NavBar;