import React, { Children } from "react"
import Button from "./UI/Button"
import CartContext from "../store/CartContext";
import { useContext } from "react";

const MealItem = (props) => {

    const { addToCart } = useContext(CartContext);
    const { addItem, cart } = useContext(CartContext);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    };
    
    

      const addToCartHandler = () => {
          addItem(props.meal);
          console.log("Added to cart:", [...cart, props.meal])
      };
    
    
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formatPrice(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={addToCartHandler} textOnly={false}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem