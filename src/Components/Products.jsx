import React, { useState } from 'react';
import menu from '../data/menu'
import Card from './Card'

const Counter = () => {
    const producto = menu.burgers

    return ( 
        <div>
            {
                producto.map(item => (
                    <Card 
                        producto = {item}  key={item.id}
                    />
            ))}
        </div>
    );
}
 
export default Counter;