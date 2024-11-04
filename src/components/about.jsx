import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/about.css';
import aboutImg from '../images/about-sushi.png';
import Fade from 'react-reveal/Fade';

const About = (props) => {
    const dark = useSelector(state => state.theme.theme)

    return (
        <div className={dark ? "About_dark" : "About"} ref={props.aboutSec}>
            <div className="about_cont">
                <Fade right>
                    <img src={aboutImg} className="about_img"/>
                </Fade>
                <Fade left>
                    <div className="about_article">
                        <div className="about_about">About Us</div>
                        <div className="about_desc">
                            We Provide <p>Healthy Food</p>
                        </div>
                        <div className="about_par">
                            Food comes to us from our relatives, whether they have wings or roots. this is how we consider food, it also has a culture. it has a history that passes from generation to generation.
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <img src={aboutImg} className="about_img1"/>
                </Fade>
            </div>
        </div>
    )
}

export default About;
