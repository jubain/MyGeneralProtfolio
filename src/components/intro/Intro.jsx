import React, { useEffect, useRef } from 'react';
import './intro.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useHistory, Link } from "react-router-dom";

function Intro(props) {

    let history = useHistory();

    function handleClick() {
        history.push("/works");
    }


    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="https://blog.allplan.com/hubfs/EN_Blog/5%20Top%20Tips%20for%20Construction%20Planning%20and%20Execution/iStock-832105172_NEU.jpg" />
                </div>
            </div>
            <div className="right">
                <div className='wrapper'>
                    <h2>The best of US</h2>
                    <h1>We are here to help</h1>
                    {/* <h3>Tech freak <span ref={textRef}></span></h3> */}
                    <p>With a team with a huge experience in building we can help to make your dream home. Our core team have spent more than 20 years each in the building industry. We offer sensible advice and cost effective solutions for your need to build, refurbish or extend your home.</p>

                </div>
                <button onClick={handleClick}><h4>SEE YOUR SERVICES</h4></button>
                {/* <Link to='/works'>
                    <KeyboardArrowDownIcon className='image' />
                </Link> */}
            </div>
        </div>
    );
}

export default Intro;