import React from 'react';


const Card = (props) => {
    
    return ( 
        <div className="cardMenu">
            <img src={props.producto.img} alt=""className={"imgCard"}/>
            
            <p className="textCard">{props.producto.name}</p>
            <p className="textCard">{props.producto.price}</p>
        </div>
     );
}
 
export default Card;