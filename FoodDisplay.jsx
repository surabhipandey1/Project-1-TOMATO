import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  console.log('Food list:', food_list); // Log the entire food_list for debugging

  return (
    <div>
      <div className='food-display' id='food-display' />
      <h2>Food display near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          console.log('Processing item:', item); // Log each item for debugging
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                category={item.category}
              />
            );
          }
          return null; // Explicitly return null for items that don't match the category
        })}
      </div>
    </div>
  )
}

export default FoodDisplay