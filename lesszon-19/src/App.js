import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/HomePage";
import Products from "./page/Products";
import Root from "./page/Root";
import Error from "./page/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/products',
                element: <Products/>
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
