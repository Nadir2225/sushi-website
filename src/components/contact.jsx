import React from "react";
import "../styles/contact.css";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import leaf1 from "../images/leaf-branch-1.png";
import leaf2 from "../images/leaf-branch-2.png";
import leaf3 from "../images/leaf-branch-3.png";
import leaf4 from "../images/leaf-branch-4.png";
import { BiMap } from "react-icons/bi";
import { TbClockHour7 } from "react-icons/tb";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = (props) => {
  const dark = useSelector((state) => state.theme.theme);

  return (
    <div className={dark ? "Contact_dark" : "Contact"} ref={props.contactSec}>
      <Fade top>
        <div className="contact_contact">Contact Us</div>
      </Fade>
      <div className={dark ? "news_box_dark" : "news_box"}>
        <img src={leaf1} className="leafs leaf1" />
        <img src={leaf2} className="leafs leaf2" />
        <img src={leaf3} className="leafs leaf3" />
        <img src={leaf4} className="leafs leaf4" />
        <div className="news_title">Subscribe Our Newsletter</div>
        <div className="news_desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
          corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam, possimus.
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter Your Email Here"
            className="email_input"
          />
          <div className="news_button">Submit</div>
        </div>
      </div>
      <div className={dark ? "contacts_dark" : "contacts"}>
        <div className="contacts_cont">
          <div className="contacts_map">
            <BiMap className="map_icon" />
            <div className="map">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="contacts_hour">
            <TbClockHour7 className="clock_icon" />
            <div className="mon">Mon-Fri: 12:00 -- 22:00</div>
            <div className="sat">Sat-Sun: 11:00 -- 1:00</div>
            <div className="dress">Dress Code:</div>
            <div className="dress_desc">
              smart casual from 5pm no shorts no slippers (gentelmen: long pants
              and covered shoes required)
            </div>
          </div>
          <div className="contacts_contacts">
            <div className="social_media">
              <BsTelephone />
              +212 6XX-XXXXXX
            </div>
            <div className="social_media">
              <HiOutlineMail />
              sushirestaurent@gmail.com
            </div>
            <div className="social_media">
              <BsFacebook />
              @SushiRabat
            </div>
            <div className="social_media">
              <BsInstagram />
              @_Sushi_Rabat_
            </div>
          </div>
        </div>
        <div className="contacts_contacts2">
          <div className="social_media">
            <BsTelephone />
            +212 6XX-XXXXXX
          </div>
          <div className="social_media">
            <HiOutlineMail />
            sushirestaurent@gmail.com
          </div>
          <div className="social_media">
            <BsFacebook />
            @SushiRabat
          </div>
          <div className="social_media">
            <BsInstagram />
            @_Sushi_Rabat_
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
