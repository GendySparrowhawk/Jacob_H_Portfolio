import LinkedInImage from '../public/assets/LInked_in.png';
import InstagramImage from '../public/assets/ig.png';
import GithubImage from '../public/assets/github.png';

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>&copy; {date.getFullYear()}</p>
      <div>
        <a href="https://www.linkedin.com/in/jacob-hoefer-480198251/">
          <img src={LinkedInImage} alt="Linkedin" />
        </a>
        <a href="https://www.instagram.com/literary_vices2/?hl=en">
          <img src={InstagramImage} alt="Instagram" />
        </a>
        <a href="https://github.com/GendySparrowhawk">
          <img src={GithubImage} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
