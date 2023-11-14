import fullFace from "../assets/fullface.png";

function About() {
  return (
    <main>
      <section className="about_me">
        <img src={fullFace} alt="jacob_Hoefer" />
        <div>
          <h1>Jacob Hoefer</h1>
          <h2>Mulit-media full-stack developmer</h2>
          <p>If you've made it this far you have probably figured out my name, but if you are here by accident, I should tell you that my name is Jacob Hoefer. I am a full-stack developer and have been a baker, bookseller, visual and audio engineer. I love making beautiful, creative things that serve my clients. 
Everything you see here is designed by me. Curious about my style? You can find links to all my projects on the home page.
I've worked with both front and back end, made images, logos, and video and audio elements. I use CSS and Adobe to design eye-catching websites to work for many types of businesses. In addition to creating websites that suit your needs, I want to think well about how we use technology to build a better world. To that end, I am eager to work with small businesses and nonprofits who are committed to intersectional equity/justice, lessing environmental impact, and responsible data collection and AI training.
For more information, please contact me on the contact page. 
</p>
        </div>
      </section>
    </main>
  );
}
export default About;
