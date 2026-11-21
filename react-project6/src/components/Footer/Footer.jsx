import classes from './Footer.module.scss';
import { Photos } from '../../Photos.js';

export default function Footer() {

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left_cont}>
                    <a href="#home" className={classes.logo}>
                        Bakery
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className={classes.links}>
                        <img src={Photos.fb} />
                        <img src={Photos.ink} />
                        <img src={Photos.inst} />
                    </div>
                </div>
                <div className={classes.right_cont}>
                    <div className={classes.column}>
                        <h3>OUR STORES</h3>
                        <a href="#" >SLOVAKIA</a>
                        <a href="#" >CZECH REPUBLIC</a>
                        <a href="#" >FINLAND</a>
                        <a href="#" >POLAND</a>
                    </div>
                    <div className={classes.column}>
                        <h3>USEFUL LINKS</h3>
                        <a href="#" >HOME</a>
                        <a href="#" >PRIVACY POLICY</a>
                        <a href="#" >TERMS CONDITIONS</a>
                        <a href="#" >CONTACT US</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}