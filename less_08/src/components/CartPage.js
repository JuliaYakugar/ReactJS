import React, { useState } from 'react';

export default function CartPage() {
    
    const [cartItems, setCartItems] = useState([
        {
            'id': 1,
            'name': 'MANGO PEOPLE',
            'type': 'T-SHIRT',
            'price': 300,
            'color': 'red',
            'size': 'L',
            'img': 'item_03.jpg',
            'quantity': 1
        },
        {
            'id': 2,
            'name': 'MANGO PEOPLE',
            'type': 'T-SHIRT',
            'price': 500,
            'color': 'red',
            'size': 'L',
            'img': 'item_07.jpg',
            'quantity': 1
        },
    ]);

    const grandTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const handleQuantityChange = (itemId, newQuantity) => {

        if (newQuantity < 1) {
            newQuantity = 1;
        }
        
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    return (
        <main>
            <section class="product__intro">
                <div class="container product__intro__wrap">
                    <div class="product__intro__text">
                        <h1>SHOPPING CART</h1>
                    </div>
                </div>
            </section>

            <section class="cart">
                <div class="container cart__wrap">

                    <div class="cart__wrap-items">
                        {cartItems.map(item => (
                            <div class="cart__wrap-items-block">
                                <img src={ require(`../img/products/${item.img}`)} alt="foto" />
                                <div class="cart__wrap-items-info">
                                    <p>{item.name}</p>
                                    <p>{item.type}</p>
                                    <p>Price: <span class="price">{item.price}</span></p>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: <input type="number" class="quantity" onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} value={item.quantity} /></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                                    </svg>
                                </div>
                            </div>
                        ))}
                       
                        <div class="cart__wrap-items-buttons">
                            <button>CLEAR SHOPPING CART</button>
                            <button>CONTINUE SHOPPING</button>
                        </div>

                    </div>
                    <div class="cart__wrap-order">
                        <form class="cart__wrap-order-adress">
                            <p>SHIPPING ADRESS</p>
                            <input type="text" placeholder="Bangladesh" />
                            <input type="text" placeholder="State" />
                            <input type="text" placeholder="Postcode / Zip" />
                            <input type="submit" value="GET A QUOTE" />
                        </form>
                        <div class="cart__wrap-order-allprice">
                            <p class="subtotal">SUB TOTAL <span>${grandTotal}</span></p>
                            <p class="grandtotal">GRAND TOTAL <span>${grandTotal}</span></p>
                            <hr class="hr" />
                            <input type="button" value="PROCEED TO CHECKOUT" />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )

}