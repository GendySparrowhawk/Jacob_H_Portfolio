import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Graphics from "./pages/Graphic_design";
import Video from "./pages/Video";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      {/* <main className="container-fluid"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/video" element={<Video />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      {/* </main> */}

      <Footer />
    </>
  );
}

export default App;
