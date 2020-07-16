import React, {useState} from 'react';
// import menu from '../data/menu'
import Card from './Card'
import Order from './Order'
import NavBar from './NavBar';

const Products = (props) => {

    const productos = props.detail || props.location.state.detail
    const [pedido, addProduct] =useState([]);

    return ( 
        <div>
        <div className="containerMenu">
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
        <div className="containerOrder">
            <Order pedido = {pedido}
                   addProduct = {addProduct}
                   productos = {productos}/>
        </div>

        </div>
        
        </div>
    );
}
 
export default Products;