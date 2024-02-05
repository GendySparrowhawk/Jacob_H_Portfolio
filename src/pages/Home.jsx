import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
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
import Yokai from "../assets/icon.png";
import SaveState from "../assets/SaveStateFullLogo-backgroundRemoved.jpeg";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [videoEditingOpen, setVideoEditingOpen] = useState(false);
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);
  const [fullstackOpen, setFullstackOpen] = useState(false);

  const toggleImageClick = (image) => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === image ? null : image
    );
  };

  const closeSelectedImage = () => {
    setSelectedImage(null);
  };
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
        <h2>Graphic Design</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide>
            <img
              src={oToole}
              alt="Fintan O'toole"
              className={selectedImage === oToole ? "selected" : ""}
              onClick={() => toggleImageClick(oToole)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={unruly1}
              alt="Unruly Sounds"
              className={selectedImage === unruly1 ? "selected" : ""}
              onClick={() => toggleImageClick(unruly1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={autumn}
              alt="Imani Perry"
              className={selectedImage === autumn ? "selected" : ""}
              onClick={() => toggleImageClick(autumn)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={flat}
              alt="William Blake"
              className={selectedImage === flat ? "selected" : ""}
              onClick={() => toggleImageClick(flat)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MH}
              alt="magical"
              className={selectedImage === MH ? "selected" : ""}
              onClick={() => toggleImageClick(MH)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={downstairs}
              alt="Labyrinth Books"
              className={selectedImage === downstairs ? "selected" : ""}
              onClick={() => toggleImageClick(downstairs)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="fullstack">
        <div className="Fdev">
          <h2>Full Stack Development</h2>
          <p>
            You can find all of my work on my{" "}
            <a
              href="https://github.com/GendySparrowhawk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            but here are a few projects I'm particularly proud of:
          </p>
        </div>
        <div className="card-sort">
          <div className="workcard">
            <div className="work-header">
              <h2>Yoaki</h2>
              <img src={Yokai} alt="Yokai" />
              <p>
                A react app for compiling, saving and purchasing items for
                friends "Wishlists." This app makes API calls, stores user data
                and allows users to change their data, and interact with others.
              </p>
            </div>
          </div>
          <div className="workcard">
            <div className="work-header">
              <h2>SaveState</h2>
              <img src={SaveState} alt="Save State" />
            </div>
            <p>
              Another group project where I mostly worked on the backend.
              Getting API calls working both internally and externally.
            </p>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="selected-image-overlay">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="selected-image"
            onClick={() => closeSelectedImage()}
          />
        </div>
      )}
    </main>
  );
}

export default Home;
