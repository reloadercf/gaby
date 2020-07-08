import React, { useState }from 'react'
import menu from '../data/menu'
import iconDelete from '../assets/image/delete.png'
import styles from '../styles/login.css'


const Order = ({pedido,productos,addProduct}) => {

    //delete producto al carrito
    const selectProduct = id => {
        let producto = productos.filter(producto => producto.id === id)[0];

        for(let index=0; index < pedido.length; index++ ) {
            if (pedido[index].id === id) {
                if(pedido[index].quantity === 1) {
                    pedido.splice(index,1)
                    addProduct([...pedido])
                } else {
                    pedido[index].quantity --
                    addProduct([...pedido])
                }
            }
        }
    }

    return (
        <div className="customerOrder">
            <div className="headerOrder">
                <input type="text" placeholder="Nombre cliente"/>
                <input type="text" placeholder="No mesa"/>
            </div>
            <table>
            <caption>Ticket para cocina</caption>
                <thead>
                    <tr>   
                    <th><p>Cant.</p></th>
                    <th><p>Producto</p></th>
                    <th><p>Precio</p></th>
                    </tr> 
                </thead>  
                {pedido.map(item => (
                <tbody key={item.id}>
                    <tr>   
                    <td><p>{item.quantity}</p></td>
                    <td><p>{item.name}</p></td>
                    <td><p>${item.price * item.quantity}</p></td>
                    <td><img onClick={() => selectProduct(item.id)} src={iconDelete} className="iconDelete"/></td>
                    </tr> 
                 </tbody>
                ))}
                <tfoot>
                    <tr>
                    <td className="totalPrice">
                        Total ${" "}
                        {pedido.reduce((prevValue, currentValue) => {
                        return prevValue + currentValue.price * currentValue.quantity;
                        }, 0)}
                    </td>
                    </tr>
                </tfoot>
            </table>
            <div>
                <button>Enviar</button>
            </div>
        </div> 

     );
     
}
 
export default Order;