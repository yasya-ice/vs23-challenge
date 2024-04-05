import React, { createContext, useReducer } from 'react';

 const CartContext = createContext();

 const initialState = {
   cartItems: [],
 };

 const cartReducer = (state, action) => {
     switch (action.type) {
       case 'ADD_TO_CART':
         const newItem = action.payload;
         const existingItem = state.cartItems.find(item => item.id === newItem.id);

         if (existingItem) {
           const updatedItems = state.cartItems.map(item =>
             item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
           );
           return { ...state, cartItems: updatedItems };
         } else {
           return { ...state, cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
         }

       default:
         return state;
     }
   };
   export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    const addToCart = (newItem) => {
      dispatch({ type: 'ADD_TO_CART', payload: newItem });
    };

    return (
      <CartContext.Provider value={{ cartItems: state.cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    )};

   