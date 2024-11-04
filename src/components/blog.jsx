import React from "react";
import "../styles/blog.css";
import { useSelector } from "react-redux";
import { GiKnifeFork } from "react-icons/gi";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import bobby from "../images/bobby-flay.jpg";
import gordan from "../images/gordan-ramzy.jpg";
import keita from "../images/keita-tominaga.jpg";
import rick from "../images/rick-stein.jpg";
import sedesh from "../images/sedesh-boodram.jpg";
import jamie from "../images/jamie-oliver.jpg";
import Fade from "react-reveal/Fade";
import customers from "../images/customers.png";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.jpg";
import user6 from "../images/user6.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Blog = (props) => {
  const dark = useSelector((state) => state.theme.theme);

  return (
    <div className={dark ? "Blog_dark" : "Blog"} ref={props.blogSec}>
      <Fade top>
        <div className="blog_blog">Blog</div>
      </Fade>
      <div className="blog_first_title">
        <GiKnifeFork className="fork" />
        <Fade top cascade>
          Meet Our Chefs
        </Fade>
        <GiKnifeFork className="fork" />
      </div>
      <Splide className="slidee" aria-label="My Favorite Images">
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={gordan} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Gordan Ramzy
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={keita} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Keita Tominaga
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram className="insta_icon" />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={jamie} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Jamie Oliver
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={bobby} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Bobby Flay
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={rick} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Rick Stein
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={dark ? "chef_box_dark" : "chef_box"}>
            <img src={sedesh} className="chef_img" />
            <div className={dark ? "chef_name_dark" : "chef_name"}>
              Sedesh Boodram
            </div>
            <div className={dark ? "chef_about_dark" : "chef_about"}>
              Internationally renowned and multi-Michelin starred, experience of
              30 years. professional at something and bla bla bla bla bla...
              anyway some infromations etc.
            </div>
            <div className={dark ? "chef_sm_dark" : "chef_sm"}>
              <BsInstagram />
              <BsTwitter />
              <BsWhatsapp />
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div className="blog_first_title2">
        <BsStarFill className="fork" />
        <Fade top cascade>
          What Our Customers Say About Us
        </Fade>
        <BsStarFill className="fork" />
      </div>
      <div className="customers_cont">
        <div className="customers_img_bloc">
          <img src={customers} className="customers_img" />
        </div>
        <div className="customers_op_bloc">
          <Fade left>
            <div className={dark ? "opinion_box_dark" : "opinion_box"}>
              <img src={user1} className="opinion_img" />
              <div className="stars">
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
              </div>
              <div className={dark ? "customer_name_dark" : "customer_name"}>
                Nadir elo
              </div>
              <div className={dark ? "customer_desk_dark" : "customer_desk"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                ab!
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className={dark ? "opinion_box_dark" : "opinion_box"}>
              <img src={user2} className="opinion_img" />
              <div className="stars">
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
              </div>
              <div className={dark ? "customer_name_dark" : "customer_name"}>
                Nada Jr
              </div>
              <div className={dark ? "customer_desk_dark" : "customer_desk"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                ab!
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className={dark ? "opinion_box_dark" : "opinion_box"}>
              <img src={user3} className="opinion_img" />
              <div className="stars">
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarHalf
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
              </div>
              <div className={dark ? "customer_name_dark" : "customer_name"}>
                andie el
              </div>
              <div className={dark ? "customer_desk_dark" : "customer_desk"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                ab!
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className={dark ? "opinion_box_dark" : "opinion_box"}>
              <img src={user5} className="opinion_img" />
              <div className="stars">
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStarFill
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
                <BsStar
                  className={dark ? "opinion_icon_dark" : "opinion_icon"}
                />
              </div>
              <div className={dark ? "customer_name_dark" : "customer_name"}>
                Rafael nadal
              </div>
              <div className={dark ? "customer_desk_dark" : "customer_desk"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                ab!
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Blog;
