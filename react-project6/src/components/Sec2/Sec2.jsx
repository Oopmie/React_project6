import classes from './Sec2.module.scss';
import { Photos } from '../../Photos.js';

export default function Sec2() {
    const items = [
        {
            img: Photos.cake1,
            dotColor: '#B57BFF',
            text: 'There are some redeming factors in greeking text',
        },
        {
            img: Photos.cake2,
            dotColor: '#6C8CFF',
            text: 'There are some redeming factors in greeking text',
        },
        {
            img: Photos.cake3,
            dotColor: '#F382FF',
            text: 'There are some redeming factors in greeking text',
        },
    ];

    return (
        <section className={classes.sec2}>
            <div className={classes.container}>
                <div className={classes.left_cont}>
                    <p>See Collection</p>
                    <h2>
                        OUR FINE HOME <br />
                        MADE CHOCOLATES
                    </h2>
                </div>

                <div className={classes.right_cont}>
                    <div className={classes.dashedLine}></div>

                    <div className={classes.cards}>
                        {items.map((item, index) => (
                            <div key={index} className={classes.card}>
                                <span
                                    className={classes.dot}
                                    style={{ backgroundColor: item.dotColor }}
                                ></span>
                                <div className={classes.verticalLine}></div>

                                <div className={classes.circle}>
                                    <img src={item.img} alt="" />
                                </div>

                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}