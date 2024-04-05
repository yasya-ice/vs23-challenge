import React, {useState} from 'react';
import Header from './components/Header'
import Meals from './components/Meals'
import {CartContext} from './store/CartContext'

const App = () => {
  const CartContext = useContext(CartContext);
  const [cart, setCart] = useState([]);
   const addItem = (item) => {
     setCart(prevCart => [...prevCart, item]);
   };
 return (
    <CartContext.Provider value={{cart, addItem}}>
    <Header/>
    <Meals/>
    </CartContext.Provider>
  );
}

export default App;
