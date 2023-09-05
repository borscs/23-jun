import {useParams} from "react-router";
import {Link} from "react-router-dom";

const ProductsDetails = () => {
    const params = useParams();
    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productsId}</p>
            <p>
                <Link to='..' relative='path'>Back</Link>
            </p>
        </>
    )
};
export default ProductsDetails;