'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




const Swiper2 = () => {
  const slides = [
    { id: 1, image: '/https://www.malaysiavacationguide.com/images/rimba-ilmu-um-front-entrance.jpg', title: 'Slide 1' },
    { id: 2, image: '/https://petitguru.s3.amazonaws.com/371/t/8.jpg', title: 'Slide 2' },
    { id: 3, image: '/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMESoYGSYRbiP1gzAC7uk4kNmJxUWaehWmw&s', title: 'Slide 3' },
  ];

  return (
    <>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><div className='bg-blue-400 min-h-[40vh] text-4xl'>1</div></SwiperSlide>
      <SwiperSlide><div className='bg-blue-400 min-h-[40vh] text-4xl'>2</div></SwiperSlide>
      <SwiperSlide><div className='bg-blue-400 min-h-[40vh] text-4xl'>3</div></SwiperSlide>
  
    </Swiper>
  </>
  );
};

export default Swiper2;
