import React from 'react';

// import add from '../Utilities/calculate';
import { add } from '../Utilities/calculate';


const Cosmetics = () => {
    const first = 55;
    const second = 56;
    const total = add(first, second)
    return (
        <div>
            <h2>Welcome to my cosmetic store</h2>
            <p>Total: {total} (+)</p>
        </div>
    );
};

export default Cosmetics;