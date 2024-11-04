import React from 'react';
import '../styles/side.css';
import { useSelector } from "react-redux";

const Side = (props) => {
    const dark = useSelector(state => state.theme.theme)

    return (
        <div className="Side">
            <div className={props.side ? (dark ? "side_opened_dark" : "side_opened") : (dark ? "side_closed_dark" : "side_closed")}>
                <div className="side_sections">
                    <div className="side_sec" onClick={() => props.scrollDown(props.homeSec)}>
                        Home
                        <div className={dark ? "line_dark" : "line"}></div>
                    </div>
                    <div className="side_sec" onClick={() => props.scrollDown(props.aboutSec)}>
                        About Us
                        <div className={dark ? "line_dark" : "line"}></div>
                    </div>
                    <div className="side_sec" onClick={() => props.scrollDown(props.menuSec)}>
                        Menu
                        <div className={dark ? "line_dark" : "line"}></div>
                    </div>
                    <div className="side_sec" onClick={() => props.scrollDown(props.blogSec)}>
                        Blog
                        <div className={dark ? "line_dark" : "line"}></div>
                    </div>
                    <div className="side_sec" onClick={() => props.scrollDown(props.contactSec)}>
                        Contact Us
                        <div className={dark ? "line_dark" : "line"}></div>
                    </div> 
                </div>
            </div>
            <div className={props.side ? "behind_side_on" : "behind_side_off"}></div>
        </div>
    )
}

export default Side;
