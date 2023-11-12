import fullFace from "../public/assets/fullface.png";

function About() {
  return (
    <main>
      <section className="about_me">
        <img src={fullFace} alt="jacob_Hoefer" />
        <div>
          <h1>Jacob Hoefer</h1>
          <h2>Mulit-media full-stack developmer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur autem fugit cumque consequuntur? Consequuntur veritatis odio repellendus ullam facilis perferendis, omnis vero numquam illo sint. Harum voluptas officiis nobis odio!Lorem ipsium</p>
        </div>
      </section>
    </main>
  );
}
export default About;
