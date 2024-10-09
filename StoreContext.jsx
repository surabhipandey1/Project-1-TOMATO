import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        console.log('StoreContext: Adding to cart. Item ID:', itemId);
        setCartItems((prev) => {
            const newCart = { ...prev };
            newCart[itemId] = (newCart[itemId] || 0) + 1;
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        console.log('StoreContext: Removing from cart. Item ID:', itemId);
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] -= 1;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    
    const getTotalCartAmaount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    useEffect(() => {
        console.log('StoreContext: Cart updated:', cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmaount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;