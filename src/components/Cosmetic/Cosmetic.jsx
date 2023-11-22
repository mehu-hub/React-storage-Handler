import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic

    const addToCart = (id) =>{
        console.log('Added', id);
    } 
    
    return (
        <div style={{border:"2px solid purple", padding:"20px", margin:"20px"}}>
            <h2>Buy this: {name}</h2>
            <h4>Price: $ {price}</h4>
            <p>It has id : {id}</p> 
            <button onClick={() => addToCart(id)} className='btn-cart'>Purchage</button>
        </div>
    );
};

export default Cosmetic;