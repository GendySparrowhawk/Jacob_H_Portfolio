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

import flat from "../assets/flat,373x,075,f.jpg";
import MH from "../assets/MH.png";
import Yokai from "../assets/icon.png";
import eatWaffle from "../assets/eatwaffle.png"
import Prepair from "../assets/prepAir.plane.png";

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
          <p>Graphic designer with a penchant for coding </p>
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
          slidesPerView={4}
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
        </Swiper>
      </div>
      <div className="fullstack">
        <div className="Fdev">
          <h2>Fullstack Development</h2>
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
          <a
            href="https://github.com/HunterMuratore/Yokai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="workcard">
              <div className="work-header">
                <h2>Yoaki</h2>
                <img src={Yokai} alt="Yokai" />
              </div>
              <p>
                A react app for compiling, saving and purchasing items for
                friends "Wishlists." This app makes API calls, stores user data
                and allows users to change their data, and interact with others.
              </p>
            </div>
          </a>
          <a
            href="https://punchbrunch.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="workcard">
              <div className="work-header">
                <h2>Punch Brunch RSVP</h2>
                <img src={eatWaffle} alt="waffles" />
              </div>
              <p>
              A quick little website I made. It was great practice for basic front and back end JS and a lot of scss styles. The main purpose was to get a more accurate guest list for the monthly get togethers we have. 
              </p>
            </div>
          </a>
          <a
            href="https://github.com/pwoodkotch/prepAir_project01_app/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="workcard">
              <div className="work-header">
                <h2>Prep-Air</h2>
                <img src={Prepair} alt="Perp-Air" />
              </div>
              <p>
                The first group project I worked on. A lot of great first steps,
                including learning how to use the google maps API and the basics
                of JS syntax. It's a simple website but I really like what we
                did with the time and knowledge we had.{" "}
              </p>
            </div>
          </a>
          
        </div>
      </div>

      <div className="works">
        <h2>Video Editing</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YhRHCCZ0aOg?si=WgJgVyF9DzNggCDY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/01L8LPkOShA?si=5L57LDM0SXvDrFIS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
