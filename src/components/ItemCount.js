import React, { useState } from 'react';
import './styles/ItemCount.css';

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);
    
    const restar = () => {
        if(counter <= 0) return;
        setCounter(counter - 1);
    }

    const sumar = () => {
        if(counter >= stock) return;
        setCounter(counter + 1);
    }

    return(
        <>
        <div className='counter'>
            <button onClick={restar}>-</button>
            <span className='quantity'>{counter}</span>
            <button onClick={sumar}>+</button>
        </div>
        </>
    );
};

export default ItemCount;