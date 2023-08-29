
import { useSelector } from 'react-redux';
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    return (
    <Layout>
        {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;