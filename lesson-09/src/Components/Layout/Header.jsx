import {Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header  className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='The Image not found' />
            </div>
        </Fragment>
    )
};

export default Header;