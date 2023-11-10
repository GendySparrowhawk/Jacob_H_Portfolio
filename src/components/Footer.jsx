function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>&copy; {date.getFullYear()}</p>
      <div>
        <a href="https://www.linkedin.com/in/jacob-hoefer-480198251/">
          <img src="../assets/LInked_in.png" alt="" />
        </a>
        <a href="https://www.instagram.com/literary_vices2/?hl=en">
          <img src="../assets/ig.png" alt="Instagram" />
        </a>
        <a href="https://github.com/GendySparrowhawk">
          <img src="../assets/github.png" alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
