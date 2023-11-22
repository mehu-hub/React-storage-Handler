// use local storage to manage cart data

const addDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        localStorage.setItem(id, 1)
    }

}

export {addDb}