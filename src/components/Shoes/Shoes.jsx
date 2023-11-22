import React from 'react';
import { multipy } from '../Utilities/calculate';

const Shoes = () => {
    const first = 23;
    const second = 33;
    const multiFy = multipy(first, second);
    return (
        <div>
            <h2>This is Shoes Components ! </h2>
            <p>Price: {multiFy} (*)</p>
        </div>
    );
};

export default Shoes;