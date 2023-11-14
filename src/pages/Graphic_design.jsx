import Slider from "react-slick";
// import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import oToole from "../assets/FINTAN O'TOOLE instagram.png";
import unruly1 from '../assets/unruly1.png';

function Graphics() {
  const images = [oToole, unruly1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <main>
      <div>
        <h1>Graphic Design</h1>
      </div>
      <section className="graphics">
        <Slider {...settings}>
          {images.map((image, i) => (
            <div key={i}>
              <img src={image} alt={`Slide ${i}`} />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

export default Graphics;
