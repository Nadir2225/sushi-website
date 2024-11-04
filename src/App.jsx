import { useState, useRef } from "react";
import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Side from "./components/side";
import About from "./components/about";
import MenuAcc from "./components/menuacc";
import Blog from "./components/blog";
import Contact from "./components/contact";

function App() {
  const [side, setSide] = useState(false);

  const homeSec = useRef(null);
  const aboutSec = useRef(null);
  const menuSec = useRef(null);
  const blogSec = useRef(null);
  const contactSec = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 60,
      behavior: "smooth",
    });
    setSide(false);
  };

  return (
    <div className="App">
      <Header
        side={side}
        setSide={setSide}
        scrollDown={scrollDown}
        aboutSec={aboutSec}
        homeSec={homeSec}
        menuSec={menuSec}
        blogSec={blogSec}
        contactSec={contactSec}
      />
      <Side
        side={side}
        scrollDown={scrollDown}
        homeSec={homeSec}
        aboutSec={aboutSec}
        menuSec={menuSec}
        blogSec={blogSec}
        contactSec={contactSec}
      />
      <Home homeSec={homeSec} scrollDown={scrollDown} aboutSec={aboutSec} />
      <About aboutSec={aboutSec} />
      <MenuAcc menuSec={menuSec} />
      <Blog blogSec={blogSec} />
      <Contact contactSec={contactSec} />
    </div>
  );
}

export default App;
