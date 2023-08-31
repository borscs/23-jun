import {useDispatch, useSelector} from 'react-redux';
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";
import {Fragment, useEffect} from "react";
import Notification from "./components/UI/Notification";
import {sendCartData} from "./store/cart-slice";

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(sendCartData(cart))
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification &&  <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
