import Header from '../Header/Header.jsx';
import classes from './Sec1.module.scss';
import { Photos } from '../../Photos.js';

export default function Sec1() {
    return (
        <section className={classes.sec1}>
            <Header />

            <div className={classes.container}>
                <div className={classes.left_cont}>
                    <h1>
                        Sweet moments, <br />
                        freshly baked with <br />
                        love
                    </h1>
                    <p>
                        Customized cakes, treats and every thing sweet <br />
                        for all your special moments.
                    </p>
                    <button className={classes.shopBtn}>
                        Shop Now
                    </button>

                    <div className={classes.links}>
                        <img src={Photos.fb} />
                        <img src={Photos.ink} />
                        <img src={Photos.inst} />
                    </div>
                </div>
                <img src={Photos.donuts} />
            </div>
            <img className={classes.str} src={Photos.str1} />

        </section>
    );
}
