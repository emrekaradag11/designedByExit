import React from 'react'
import video from './../media/slider.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Slider() {
  return (
    <div className="slider">
        
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="rightSwiper"
            navigation
        >
            
            <SwiperSlide >
                    
                <video loop autoPlay muted>
                    <source
                    src={video}
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div class="sliderShape1"></div>
                <div class="sliderShape2"></div>
                <div class="sliderShape3"></div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider