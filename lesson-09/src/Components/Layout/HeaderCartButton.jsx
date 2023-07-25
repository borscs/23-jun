import { IoCartOutline } from "react-icons/io5";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
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