import {IoCartOutline} from "react-icons/io5";
import classes from './HeaderCartButton.module.css'
import cartContext from "../../Store/cart-context";
import {useContext, useEffect, useState} from "react";

const HeaderCartButton = (props) => {
    const [btnBumping, setBtnBumping] = useState(false);
    const cartCtx = useContext(cartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((cartNumber, item) => {
        return cartNumber + item.amount;
    }, 0);


    const btnClass = `${classes.button} ${btnBumping ? classes.bump : '' }`;

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnBumping(true);
        const timer = setTimeout(() => {
            setBtnBumping(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <IoCartOutline/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;