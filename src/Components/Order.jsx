import React, { useState }from 'react'
import menu from '../data/menu' 

const Order = ({pedido}) => {

    return (
        <div className="customerOrder">
            <div className="headerOrder">
                <input type="text" placeholder="Nombre cliente"/>
                <input type="text" placeholder="No mesa"/>
            </div>
             {pedido.map(item => (
                 <table key={item.id}> 
                     <tr>   
                     <td><p>{item.quantity}</p></td>
                     <td><h5>{item.name}</h5></td>
                     <td><p>${item.price}</p></td>
                     </tr> 
                 </table>
            ))} 
        </div> 

     );
}
 
export default Order;