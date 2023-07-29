import React from 'react';
import "./media.css";
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {BsArrowRight} from 'react-icons/bs';
import Logo from "../../assets/abstract3.png";

const Media = () => {
  return (
    <div className='media-container'>
          <div className='media-page-title'>
            <h1>Media Centre</h1> 
            <span className='line'></span>
        </div>

        <div className='media-content-container'>
        <Swiper className='swiper-media'
    modules={[Pagination, Autoplay]}
    slidesPerView={1}
    spaceBetween={15}
    breakpoints={
        {
            600: {
                slidesPerView: 1.5
            },
            1000: {
                slidesPerView: 3
            }
        }
    }
    centeredSlides={true}
    pagination
    autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}
    >
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#"><span>Read More </span><BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='media-content'>
                <h1 className='media-content-title'>LukeMobile emerges Telecom Company of the year</h1>
                <p className='media-content-small-info'>Media News, Press Release, Telecom</p>
                <p className='media-content-big-info'>
                    The business person of the year was roundly won by the founder of innoson vehicle manufacturing company, Mr. Innocent Chukwuma...
                </p>

                <a href="#">Read More <BsArrowRight className='read-more-icon'/></a>
            </div>
        </SwiperSlide>
    </Swiper>
        </div>

        <div className='media-img'>
            <img src={Logo} alt="design logo"/>
        </div>
    </div>
  )
}

export default Media