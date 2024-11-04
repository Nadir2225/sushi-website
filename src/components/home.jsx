import React, { useRef, useEffect } from "react";
import "../styles/home.css";
import { useSelector } from "react-redux";
import homeImg from "../images/home-sushi-rolls.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = (props) => {
  const dark = useSelector((state) => state.theme.theme);

  return (
    <div className={dark ? "Home_dark" : "Home"} ref={props.homeSec}>
      <div className="home_cont_1">
        <div className="home_cont">
          <div className="home_first">
            <Fade top cascade>
              <div className="home_title">
                Welcome To{" "}
                <div className="pp">
                  Our <p className="p">Asian</p>
                </div>{" "}
                <div className="resto">Restaurant</div>
              </div>
              <div className={dark ? "home_desc_dark" : "home_desc"}>
                Enjoy a great dinner with your loved ones in the best asian
                restaurent in the city and live such an amazing experience with
                us.
              </div>
            </Fade>
          </div>
          <img src={homeImg} className="home_img" />
        </div>
        <div className="home_btn_cont">
          <div
            className={dark ? "home_btn_dark" : "home_btn"}
            onClick={() => props.scrollDown(props.aboutSec)}
          >
            Explore More
            <BsFillArrowRightCircleFill className="home_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
