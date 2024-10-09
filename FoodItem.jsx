import React, { useContext } from 'react';
import './FoodItem.css';
import plus from '../../assets/add_icon_green.png';
import minus from '../../assets/remove_icon_red.png';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, image, price, description }) => {
    console.log('FoodItem rendered with ID:', id);
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleAddToCart = () => {
        console.log('Adding item to cart with ID:', id);
        addToCart(id);
    };

    const handleRemoveFromCart = () => {
        console.log('Removing item from cart with ID:', id);
        removeFromCart(id);
    };

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={`Image of ${name}`} />
                {!cartItems[id] ? (
                    <img className="add" onClick={handleAddToCart} src={plus} alt="Add item" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={handleRemoveFromCart} src={minus} alt="Remove item" />
                        <p>{cartItems[id]}</p>
                        <img onClick={handleAddToCart} src={plus} alt="Add item" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default FoodItem;