import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div>Enoca Frontend Challenge</div>
      <div className="footer-links">
        <p>
          <a href="https://github.com/KaganCubukcu" target="_blank">
            <img
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              alt="Github"
              style={{ width: 50, height: 50, borderRadius: 20 }}
            />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/kagancubukcu/" target="_blank">
            <img
              src=" https://cdn-icons-png.flaticon.com/512/38/38669.png"
              alt="Linkedin"
              style={{ width: 50, height: 50, borderRadius: 20 }}
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
