import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const MainCarousel = props => {
    const settings = {
        dots: true,
        infinite: false,
        /*
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1    
        */
    }
    const { banners } = props;
    return(
        <div className="mainCarousel">
            <Slider {...settings}>
             { banners.map( item => (
                 <div key={item.id}>
                     <img src={item.download_url} alt="Banner" />
                 </div>
             ))}
            </Slider>
        </div>
    )
}

export default MainCarousel;
