// use local storage to manage cart data

const addDb = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = id => {
    const stroedCard = localStorage.getItem('shopping-cart');
    if (stroedCard) {
        const shoppingCart = JSON.parse(stroedCard);
        if (id in shoppingCart)
            delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


export { addDb, removeFromDb }