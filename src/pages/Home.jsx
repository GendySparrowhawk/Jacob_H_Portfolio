import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-regular-svg-icons';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import RightFace from "../assets/right_face.png";
import LeftFace from "../assets/left_face_full.png";
import LeftLines from "../assets/left-lines.png";

import oToole from "../assets/FINTAN O'TOOLE instagram.png";
import unruly1 from "../assets/unruly1.png";
import autumn from "../assets/autumn_work.png";
import downstairs from "../assets/downstairs sign redux CAPS.png";
import flat from "../assets/flat,373x,075,f.jpg";
import MH from "../assets/MH.png";


function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [videoEditingOpen, setVideoEditingOpen] = useState(false);
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);
  const [fullstackOpen, setFullstackOpen] = useState(false);

  const toggleDropdownGraphics = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <main>
      <section className="cta">
        <div className="text">
          <h1>Jacob Hoefer</h1>
          <p>From png to pwa and everything in between</p>
          <p>Check out my work below</p>
        </div>

        <div className="face">
          <img src={RightFace} alt="rightface" />
          <img src={LeftFace} alt="leftFace" />
          <img src={LeftLines} alt="lines" />
        </div>
      </section>  

      <div className="works">
        <h2>graphic Design</h2>
        <FontAwesomeIcon icon={faCircleChevronDown} />
        
      </div>
    </main>
  )};

export default Home;
{/* <section>
                    <Swiper
                      className="graphics"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <img src={oToole} alt="Fintan Otoole" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={autumn} alt="Labyrinth Books" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={flat} alt="Hell" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={MH} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={unruly1} alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </section> */}