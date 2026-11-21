import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

import Sec1 from './components/Sec1/Sec1.jsx';
import Sec2 from './components/Sec2/Sec2.jsx';
import Sec3 from './components/Sec3/Sec3.jsx';
import Sec4 from './components/Sec4/Sec4.jsx';
import Sec5 from './components/Sec5/Sec5.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        <Sec1 />,
        <Sec2 />,
        <Sec3 />,
        <Sec4 />,
        <Sec5 />,
        <Footer />
    ];

    return (
        <div className="app-wrapper">
            <Swiper
                direction={'vertical'}
                effect={'cube'}
                grabCursor={true}
                mousewheel={true}
                speed={800}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowScale: 0.94,
                }}
                modules={[EffectCube, Mousewheel]}
                className="mySwiper"
            >
                {sections.map((section, index) => (
                    <SwiperSlide key={index}>
                        {Math.abs(activeIndex - index) <= 1 ? section : null}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}