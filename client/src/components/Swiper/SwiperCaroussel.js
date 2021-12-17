import React, { Component, useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

import "./SwiperCaroussel.css";
var listOfImages =[];


// install Swiper modules
SwiperCore.use([Pagination]);

export default class SwiperCaroussel extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
      listOfImages = this.importAll(require.context('/Users/owen/Documents/M1/Hackaton/keyframeJS/server/ressource/outpout/', false, /\.(png|jpe?g|svg)$/));
  }
  render() {
    return (
      <div>
          <Swiper slidesPerView={3} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
          {
         listOfImages.map((image, index) => 
            <SwiperSlide>
              <img key={index} src={image} alt="info"></img>
            </SwiperSlide>
          )
        }
          </Swiper>
      </div>
    )
  }
}
