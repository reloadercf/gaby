import React from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import menu from '../data/menu'

const NavBar = () => {
    const firebase= useFirebaseApp();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <nav className="main-nav">
            <Link exact to="/">
            <span style={{padding: "10px"}}>Login</span>
            </Link>
            <Link to={{ pathname: "Products", state: {detail: menu.burgers} }}>
                <span style={{padding: "10px"}}>Hamburguesas</span>
            </Link>
            <Link to={{ pathname: "Products",  state: {detail: menu.breakfast}}}>
                <span style={{padding: "10px"}}>Desayunos</span>
            </Link>
            <Link to={{ pathname: "Products", state: {detail: menu.drinks}}}>
                <span style={{padding: "10px"}}>Bebidas</span>
            </Link>
            <Link to={{ pathname: "Products", state: {detail: menu.additional}}}>
                <span style={{padding: "10px"}}>Complementos</span>
            </Link>
            <span onClick = {logout} style={{padding: "10px", textDecoration: "underline", cursor: "pointer"}}>logout</span>
        </nav>
     );
}
 
export default NavBar;