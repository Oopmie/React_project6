import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import classes from './Sec5.module.scss';
import { Photos } from '../../Photos.js';

export default function Sec5() {
    const reviews = [
        {
            img: Photos.cust1,
            name: 'Bianka P.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            img: Photos.cust2,
            name: 'Jakub S.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            img: Photos.cust1,
            name: 'Bianka P.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            img: Photos.cust2,
            name: 'Jakub S.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            img: Photos.cust1,
            name: 'Bianka P.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            img: Photos.cust2,
            name: 'Jakub S.',
            city: 'Bratislava, Slovakia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
    ];

    return (
        <section className={classes.sec5}>
            <div className={classes.container}>
                <div className={classes.titleRow}>
                    <span className={classes.dashedLine}></span>
                    <h2>OUR CUSTOMERS</h2>
                    <span className={classes.dashedLine}></span>
                </div>

                <Swiper
                    slidesPerView={2}
                    slidesPerGroup={2}
                    spaceBetween={40}
                    nested={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={classes.cardsSwiper}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index} className={classes.slide}>
                            <div className={classes.card}>
                                <div className={classes.userRow}>
                                    <img src={item.img} />
                                    <div className={classes.userInfo}>
                                        <h3>{item.name}</h3>
                                        <span>{item.city}</span>
                                    </div>
                                </div>

                                <p>{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}