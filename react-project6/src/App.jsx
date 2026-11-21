import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

import Sec1 from './components/Sec1/Sec1.jsx';
import Sec2 from './components/Sec2/Sec2.jsx';
import Sec3 from './components/Sec3/Sec3.jsx';
import Sec4 from './components/Sec4/Sec4.jsx';

import './App.css';

export default function App() {

    return (
        <div className="app-wrapper">
            <Swiper
                direction={'vertical'}
                effect={'cube'}
                grabCursor={true}
                mousewheel={true}
                speed={800}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowScale: 0.94,
                }}
                modules={[EffectCube, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Sec1 />
                </SwiperSlide>

                <SwiperSlide>
                    <Sec2 />
                </SwiperSlide>

                <SwiperSlide>
                    <Sec3 />
                </SwiperSlide>

                <SwiperSlide>
                    <Sec4 />
                </SwiperSlide>


            </Swiper>
        </div>
    );
}