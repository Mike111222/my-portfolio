import "./intro.scss";
import React, { useEffect, useState } from "react";

export default function Intro() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const strings = ["Full Stack Web Developer", "Software Engineer", "Content Creator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 1500);
  
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1>Mike</h1>
          <h3>
            Passionate{" "}
            <span className="typing-animation">
              {strings[currentStringIndex]}
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
