import React, { useState }from 'react'
import menu from '../data/menu' 

const Order = ({pedido}) => {

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
                    <td className="unitQuantity"><p>{item.quantity}</p></td>
                    <td><p>{item.name}</p></td>
                    <td className="value"><p>${item.price}</p></td>
                    </tr> 
                 </tbody>
                ))}
            </table>  
        </div> 

     );
}
 
export default Order;