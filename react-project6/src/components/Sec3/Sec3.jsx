import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import classes from './Sec3.module.scss';
import { Photos } from '../../Photos.js';

export default function Sec3() {
    const products = [
        {
            img: Photos.best1,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best2,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best3,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best1,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best2,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best3,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best1,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best2,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
        {
            img: Photos.best3,
            title: '3-tier red velvet cake',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            price: '45.90 €',
        },
    ];

    return (
        <section className={classes.sec3}>
            <div className={classes.container}>
                <div className={classes.titleRow}>
                    <span className={classes.dashedLine}></span>
                    <h2>OUR BEST SELLERS</h2>
                    <span className={classes.dashedLine}></span>
                </div>

                <a href="#" onClick={(e) => e.preventDefault()} className={classes.seeAll}>
                    See All
                </a>

                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    nested={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className={classes.cardsSwiper}
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={index} className={classes.slide}>
                            <div className={classes.card}>
                                <div className={classes.imgBox}>
                                    <img src={item.img} alt={item.title} />
                                    <button type="button" className={classes.likeBtn}>
                                        <img src={Photos.heart} alt="like" />
                                    </button>
                                </div>

                                <div className={classes.info}>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <div className={classes.bottomRow}>
                                        <span>{item.price}</span>
                                        <button type="button" className={classes.cartBtn}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}