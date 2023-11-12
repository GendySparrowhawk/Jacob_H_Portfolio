import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oToole from "../public/assets/FINTAN O'TOOLE instagram.png";



function Graphics() {
  const images = [

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <main>
      <div className="graphs">
        <h1>Graphic Design</h1>
      </div>
      <section>
        <Slider {...settings}>
          {images.map((image, i) => (
            <div key={i}>
              <img  src={image} alt={`Slide ${i}`} />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

export default Graphics;
