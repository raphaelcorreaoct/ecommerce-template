import React from 'react';
import Slider from "react-slick";
import b1 from 'assets/banne-1.png';
import b2 from 'assets/banne-2.png';

const MainSlide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
      };
      
    return (
        <Slider {...settings} className="main-slide">
            <div><img src={b1} alt="Um Tenis lindo"/></div>
            <div><img src={b2} alt="Outro Tenis lindo"/></div>
            <div><img src={b1} alt="Um Tenis lindo"/></div>
            <div><img src={b2} alt="Outro Tenis lindo"/></div>
        </Slider>
    );
}

export default MainSlide;
