import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import menu from '../data/menu'
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
    const history = useHistory();
    const firebase= useFirebaseApp();
    let rol = "mesero" 

    const logout = async () => {
        await firebase.auth().signOut();
        history.push("/login");
    }

    //QUITAR CUANDO SE CONECTE A LA BD
    // if(props.user.email === "gabyalvarzb@gmail.com") {
    //     rol = "cocinero"
    // }

    return ( 
        <Fragment>
            <nav className="main-nav">
            { rol === "mesero" &&
                <Fragment>
                    <Link to={{ pathname: "Products", state: {detail: menu.burgers} }}>
                        {/* <span style={{padding: "10px"}}>Hamburguesas</span> */}
                        <button style={{padding: "10px"}}>Hamburguesas</button>
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
                </Fragment>
            }
            {rol === "cocinero" &&
                    <Link to="/Kitchen/Cookmodule">
                        <span style={{padding: "10px"}}>Cocina</span>
                    </Link>
            }
            <span onClick = { e =>logout(e)} style={{padding: "10px", textDecoration: "underline", cursor: "pointer"}}>Logout</span>
        </nav>
        </Fragment>
     );
}
 
export default NavBar;

