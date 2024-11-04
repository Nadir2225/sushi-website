import React from 'react';
import '../styles/menuacc.css';
import { useSelector } from 'react-redux';
import onigiri from '../images/popular-onigiri.png';
import homeSushi from '../images/popular-sushi-rolls.png';
import spring from '../images/popular-spring-rols.png';
import { MdMenuBook } from "react-icons/md";
import Fade from 'react-reveal/Fade';

const MenuAcc = (props) => {
    const dark = useSelector(state => state.theme.theme)

    return (
        <div className={dark ? "MenuAcc_dark" : "MenuAcc"} ref={props.menuSec}>
            <div className="menuacc_cont">
                <div className="menuacc_top">
                    <Fade top>
                        <div className="menuacc_title">The Best Food</div>
                    </Fade>
                    <Fade top cascade>
                        <div className="menuacc_desc">Popular Dishes</div>
                    </Fade>
                </div>
                <div className="menuacc_bot">
                        <div className={dark ? "popular_box_dark" : "popular_box"}>
                            <img src={onigiri} className="popular_img"/>
                            <div className="popular_title">Onigiri</div>
                            <div className={dark ? "popular_desc_dark" : "popular_desc"}>Japanese Dish</div>
                            <div className="popular_price">
                                $10.99
                            </div>
                        </div>
                        <div className={dark ? "popular_box_dark" : "popular_box"}>
                            <img src={spring} className="popular_img"/>
                            <div className="popular_title">Spring Rolls</div>
                            <div className={dark ? "popular_desc_dark" : "popular_desc"}>Japanese Dish</div>
                            <div className="popular_price">
                                $15.99 
                            </div>
                        </div>
                        <div className={dark ? "popular_box_dark" : "popular_box"}>
                            <img src={homeSushi} className="popular_img"/>
                            <div className="popular_title">Sushi Rolls</div>
                            <div className={dark ? "popular_desc_dark" : "popular_desc"}>Japanese Dish</div>
                            <div className="popular_price">
                                $19.99
                            </div>
                        </div>
                </div>
                <div className="menuacc_btn_cont">
                    <div className={dark ? "menuacc_btn_dark" : "menuacc_btn"}>
                        Check Our Menu
                        <MdMenuBook className="menuacc_icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuAcc;
