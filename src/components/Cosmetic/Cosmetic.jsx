import React from 'react';
import './Cosmetic.css'
import { addDb, removeFromDb } from '../Utilities/fakedb';
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic

    const addToCart = (id) => {
        addDb(id);
    }

    const removeDb = (id) => {
        removeFromDb(id);
    }
    
    return (
        <div style={{ border: "2px solid purple", padding: "20px", margin: "20px" }}>
            <h2>Buy this: {name}</h2>
            <h4>Price: $ {price}</h4>
            <p>It has id : {id}</p>
            <button onClick={() => addToCart(id)} className='btn-cart'>Purchage</button> 
            <button onClick={() => removeDb(id)} className='btn-cart'>Remove</button>
        </div>
    );
};

export default Cosmetic;