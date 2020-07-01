import React, {useState, Fragment } from 'react';
import menu from '../data/menu'
import Card from './Card'
import Order from './Order'
import NavBar from './NavBar';

const Products = (props) => {

    const productos = props.location.state.detail
    const [pedido, addProduct] =useState([]);

    return ( 
        <Fragment>
            <NavBar />
        <div className="containerCard">
            {productos.map(item => (
                <Card 
                    key={item.id}
                    producto = {item}
                    addProduct = {addProduct}
                    productos = {productos}
                    pedido = {pedido}
                />
            ))} 
        </div>
        <div>
            <Order pedido = {pedido}/>
        </div>
        </Fragment>
    );
}
 
export default Products;