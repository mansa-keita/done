import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Dart from "../../img/Dart-logo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import python from "../../img/pythonsundi-removebg-preview.png"
import flutter from "../../img/flutterclock.png"
import react from "../../img/reactjs.png"
import manla from "../../img/manla.png"
import native from "../../img/navee.png"

// import flutter from "../../img/fluttersundi-removebg-preview.png"
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works with All this
          </span>
          <span>Programming & Language</span>
          <spane>
           I have been practicing all this programming language almost a year now
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={manla} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={native} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={flutter} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
