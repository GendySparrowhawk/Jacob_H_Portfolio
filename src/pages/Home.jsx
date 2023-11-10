import RightFace from "../public/assets/right_face.png";
import LeftFace from "../public/assets/left_face_full.png";
import LeftLines from "../public/assets/left-lines.png";

function Home() {
  return (
    <main>
      <section className="cta">
        <h1>Jacob Hoefer</h1>
        <div className="dropdown">
          <h3>Full Stack Web Development</h3>
          <h3>Graphic Design</h3>
          <h3>Video/Audio Editing</h3>
        </div>
      </section>
      <div className="face">
        <img src={RightFace} alt="rightface" />
        <img src={LeftFace} alt="leftFace" />
        <img src={LeftLines} alt="lines" />
      </div>
    </main>
  );
}
export default Home;
