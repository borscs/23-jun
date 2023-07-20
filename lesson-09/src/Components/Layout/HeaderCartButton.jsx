import { IoCartOutline } from "react-icons/io5";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <IoCartOutline/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;