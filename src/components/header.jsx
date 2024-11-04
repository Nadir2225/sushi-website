import React, { useState } from 'react';
import '../styles/header.css';
import panda from '../images/about-sushi-title.png';
import { FiSun , FiMoon } from 'react-icons/fi';
import ReactCardFlip from 'react-card-flip';
import { useSelector , useDispatch } from "react-redux";
import { change } from '../theme/themeSlice';


function Header(props) {
    const dark = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const [isflipped, setIsflipped] = useState(false)

    const theme = () => {
        dispatch(change())
        setIsflipped(!isflipped)
    }

    return (
        <div className={dark ? "Header_dark" : "Header"}>
            <div className="theme_1">
                <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
                    <div className="light" onClick={theme}>
                        <FiSun />
                    </div>
                    <div className="dark" onClick={theme}>
                        <FiMoon />
                    </div>
                </ReactCardFlip>
            </div>
            <div className="logo">
                <img className="logo_image" src={panda} />
                <div className="logo_title">SUSHI</div>
            </div>
            <div className="sections">
                <div className={dark ? "sec_dark" : "sec"} onClick={() => props.scrollDown(props.homeSec)}>Home</div>
                <div className={dark ? "sec_dark" : "sec"} onClick={() => props.scrollDown(props.aboutSec)}>About Us</div>
                <div className={dark ? "sec_dark" : "sec"} onClick={() => props.scrollDown(props.menuSec)}>Menu</div>
                <div className={dark ? "sec_dark" : "sec"} onClick={() => props.scrollDown(props.blogSec)}>Blog</div>
                <div className={dark ? "sec_dark" : "sec"} onClick={() => props.scrollDown(props.contactSec)}>Contact Us</div>
            </div>
            <div className="theme_2">
                <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
                    <div className="light" onClick={theme}>
                        <FiSun />
                    </div>
                    <div className="dark" onClick={theme}>
                        <FiMoon />
                    </div>
                </ReactCardFlip>
            </div>
            <div className={props.side ? "menu_btn open" : "menu_btn"} onClick={() => props.setSide(!props.side)}>
                <div className={dark ? "menu_btn_burger_dark" : "menu_btn_burger"}></div>
            </div>
        </div>
    )
}

export default Header;