import React from 'react';

import './Placeholder.css';
import { StoreContext } from '../../context/StoreContext';


const Placeholder = () => {
    const[ getTotalCartAmaount ] = useState(StoreContext);
  

  return (
    <form className='place-order'>
      <div className='placeholder-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Streets' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Country' />
        <input type="text" placeholder='Phone Number' />

        <div className='cart-total-detail'>
          <p>Subtotal</p>
        <p> ${getTotalCartAmaount()}</p>
        </div>
        <hr />
        <div className='cart-total-detail'>
          <p>Delivery fee</p>
          <p>${2}</p>
        </div>
        <hr />
        <div className='cart-total-detail'>
          <p>Total</p>
          <b>${0}</b>
        </div>
        <button> Proceed To Payment</button>
      </div>
    </form>
  );
};

export default Placeholder;
