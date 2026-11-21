import classes from './Header.module.scss';
import { Photos } from '../../Photos.js';

export default function Header() {

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <a href="#home" className={classes.logo}>
                    Bakery
                </a>

                <div className={classes.links}>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                </div>

                <div className={classes.Btns}>
                    <button type="button" className={classes.authBtn}>
                        Login/Register
                    </button>
                    <button type="button" className={classes.iconBtn}>
                        <img src={Photos.heart} />
                    </button>
                    <button type="button" className={classes.iconBtn}>
                        <img src={Photos.bag} />
                    </button>
                </div>
            </nav>
        </header>
    )
}