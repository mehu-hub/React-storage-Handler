import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    return (
        <div style={{border:"2px solid purple", padding:"20px", margin:"20px"}}>
            <h2>Buy this: {name}</h2>
            <h4>Price: $ {price}</h4>
            <p>It has id : {id}</p>
        </div>
    );
};

export default Cosmetic;