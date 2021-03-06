import React from "react";
import "./CareerSlider.css";
import Carousel from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headertabs2 from './Images/headertabs2.jpg';
import headertabs3 from './Images/headertabs3.jpg';
import headertabs4 from './Images/headertabs4.jpg';
import headertabs1 from './Images/headertabs1.jpg';
import headertabs11 from './Images/headertabs11.jpg';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
        <div>
          <div className="next-slick-arrow"> <IoIosArrowDroprightCircle/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> <IoIosArrowDropleftCircle/> </div>
        </div>
      )
  };
  
  return (
    <div className="container">
    
    <Carousel {...settings} >
    <div className="slideimg1">
              <img  src={headertabs2} alt="Slide1" height="350px" width="535px"/><br/>
              <h2>Surgery Specialist</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="Buttonslide1">
                    <div className="btnslide1 ">
                            <NavLink to="/career">Apply Now</NavLink>
                    </div>
                    <div className="Linkslide1">
                            <NavLink to="/career">More Info</NavLink>
                    </div>
              </div>
        </div>
        <div className="slideimg1">
              <img  src={headertabs3} alt="Slide2" height="350px" width="535px"/><br/>
              <h2>Doctor Specialist</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="Buttonslide1">
                    <div className="btnslide1">
                            <NavLink to="/career">Apply Now</NavLink>
                    </div>
                    <div className="Linkslide1">
                            <NavLink to="/career">More Info</NavLink>
                    </div>
              </div>
        </div>
        <div className="slideimg1">
              <img  src={headertabs4} alt="Slide3" height="350px" width="535px"/><br/>
              <h2>Health Care</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="Buttonslide1">
                    <div className="btnslide1">
                            <NavLink to="/career">Apply Now</NavLink>
                    </div>
                    <div className="Linkslide1">
                            <NavLink to="/career">More Info</NavLink>
                    </div>
              </div>
        </div>
        <div className="slideimg1">
              <img  src={headertabs1} alt="Slide4" height="350px" width="535px"/><br/>
              <h2>Nurses Specialist</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="Buttonslide1">
                    <div className="btnslide1">
                            <NavLink to="/career">Apply Now</NavLink>
                    </div>
                    <div className="Linkslide1">
                            <NavLink to="/career">More Info</NavLink>
                    </div>
              </div>
        </div>
        <div className="slideimg1">
              <img  src={headertabs11} alt="Slide5" height="350px" width="535px"/><br/>
              <h2>Children Specialist</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="Buttonslide1">
                    <div className="btnslide1">
                            <NavLink to="/career">Apply Now</NavLink>
                    </div>
                    <div className="Linkslide1">
                            <NavLink to="/career">More Info</NavLink>
                    </div>
              </div>
        </div>
    </Carousel>
    
    </div>   
  );
}