import logo from '../assets/logo.jpg'
import Button from './UI/Button'

import { CartProvider } from '../store/CartContext';
import { useContext } from 'react';

const Header = () => {
    const { cartItems } = useContext(CartContext);
     const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

     const handleButtonClick = () => {
     };

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button onCLick={handleButtonClick} textOnly={true}>Cart ({totalCount})</Button>
            </nav>
        </header>
    )
}

export default Header