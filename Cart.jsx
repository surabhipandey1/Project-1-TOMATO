import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmaount } = useContext(StoreContext);
    const navigate = useNavigate();

    const cartItemIds = Object.keys(cartItems);
    const isEmpty = cartItemIds.length === 0;

    const getItemById = (id) => food_list.find(item => item._id === id);

    const cartContainerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const cartItemStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
    };

    const cartItemRowStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    };

    const imgStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '10px',
        objectFit: 'cover',
    };

    const priceStyle = {
        fontWeight: 'bold',
    };

    const quantityStyle = {
        fontSize: '14px',
        color: '#555',
    };

    const removeItemStyle = {
        color: 'red',
        cursor: 'pointer',
        fontSize: '14px',
    };

    return (
        <div style={cartContainerStyle}>
            <h2>Your Cart</h2>
            <div className="cart-items">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
                    <p>Items</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <br />
                {isEmpty ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cartItemIds.map((itemId) => {
                        const item = getItemById(itemId);
                        if (item) {
                            return (
                                <div key={itemId} style={cartItemStyle}>
                                    <div style={cartItemRowStyle}>
                                        <img src={item.image} alt={item.name} style={imgStyle} />
                                        <p>{item.name}</p>
                                    </div>
                                    <p style={priceStyle}>$ {item.price}</p>
                                    <p style={quantityStyle}>{cartItems[itemId]}</p>
                                    <p style={priceStyle}>${item.price * cartItems[itemId]}</p>
                                    <p onClick={() => removeFromCart(itemId)} style={removeItemStyle}>
                                        Remove
                                    </p>
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>
            <div className="cart-bottom">
                <div className='cart-total'>
                    <h2> Cart Total</h2>
                    <div>
                        <div className='cart-total-detail'>
                            <p> subtotal</p>
                            <p>${getTotalCartAmaount}</p>
                        </div>
                        <hr />
                        <div className='cart-total-detail'>
                            <p> Delivery fee</p>
                            <p>${getTotalCartAmaount()===0 ? 0 : 2}</p>

                        </div>
                        <hr />
                        <div className='cart-total-detail'>
                            <p> Total</p>
                            <b>{getTotalCartAmaount()===0 ? 0 : getTotalCartAmaount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Checkout To Proceed</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p> If you have a promo code, enter it below</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='Promo code' />
                            <button>Apply</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};



export default Cart;
