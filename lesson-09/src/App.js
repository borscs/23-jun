import Header from "./Components/Layout/Header";
import {Fragment, useState} from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
const [cartIsShow, setCartShow] = useState(false);

    return (
        <CartProvider>
            {cartIsShow && <Cart onClose={() => setCartShow(false)}/>}
            <Header onShowCart={() => setCartShow(true)}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
