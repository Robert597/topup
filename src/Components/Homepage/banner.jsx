import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import Slider1 from "../../assets/4k8kinnerSlider1.jpg";
import Slider3 from "../../assets/NINSlider.jpg";
import Slider2 from "../../assets/banner2021.jpg";
import Slider4 from "../../assets/unlimtedoptionsslider.jpg";
import "./banner.css";



const Banner = () => {
  return (
    <div className='slider-container'>
    <Swiper
    modules={[Navigation, Autoplay]}
    slidesPerView={1} 
    centeredSlides={true}
    navigation
    autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    >
        <SwiperSlide>
            <div className="imageSliderContainer">
                <img src={Slider1} alt="advertising graphics"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imageSliderContainer">
                <img src={Slider2} alt="advertising graphics"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imageSliderContainer">
                <img src={Slider3} alt="advertising graphics"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imageSliderContainer">
                <img src={Slider4} alt="advertising graphics"/>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Banner