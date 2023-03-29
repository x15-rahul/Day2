const shoppingCart = [
    {product: 'shirt', price: 1200, quantity: 1},
    {product: 'pant', price: 1500, quantity: 1},
    {product: 'shoe', price: 2800, quantity: 1},
    {product: 'belt', price: 500, quantity: 1},
];

function getTotal(products){
    let total = 0;
    for(const product of products){
        total += (product.price * product.quantity);
    }
    return total;
}

const totalPrice = getTotal(shoppingCart);
console.log(totalPrice);