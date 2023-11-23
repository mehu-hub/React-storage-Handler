import React from 'react';
import './Cosmetic.css'
import { addDb } from '../Utilities/fakedb';
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic

    const addToCart = (id) =>{
       addDb(id);
    } 
    
    return (
        <div style={{border:"4px solid purple", padding:"20px", margin:"20px"}}>
            <h2>Buy this: {name}</h2>
            <h4>Price: $ {price}</h4>
            <p>It has id : {id}</p> 
            <button onClick={() => addToCart(id)} className='btn-cart'>Purchage</button>
        </div>
    );
};

export default Cosmetic;