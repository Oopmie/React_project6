import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import classes from './Sec4.module.scss';
import { Photos } from '../../Photos.js';

export default function Sec4() {
    const articles = [
        {
            img: Photos.best1,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best4,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best5,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best1,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best4,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best5,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best1,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best4,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
        {
            img: Photos.best5,
            day: '23',
            month: 'MAR',
            title: 'How to make perfect cakes at home',
        },
    ];

    return (
        <section className={classes.sec4}>
            <div className={classes.container}>
                <div className={classes.titleRow}>
                    <span className={classes.dashedLine}></span>
                    <h2>OUR NEW ARTICLES</h2>
                    <span className={classes.dashedLine}></span>
                </div>

                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    nested={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={classes.cardsSwiper}
                >
                    {articles.map((item, index) => (
                        <SwiperSlide key={index} className={classes.slide}>
                            <div className={classes.card}>
                                <div className={classes.imgBox}>
                                    <img src={item.img} alt={item.title} />

                                    <div className={classes.dateBadge}>
                                        <span>{item.day}</span>
                                        <span>{item.month}</span>
                                    </div>

                                    <div className={classes.overlay}>
                                        <h3>{item.title}</h3>
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