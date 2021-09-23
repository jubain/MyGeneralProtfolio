import React from 'react';
import './menu.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Menu({ menuOpen, setmenuOpen }) {
    return (

        <div className={"menu " + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setmenuOpen(false)}>
                    <Link to="/" className="item" >Intro</Link>
                </li>
                {/* <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li> */}
                <li onClick={() => setmenuOpen(false)}>
                    <Link to="/works" className="item">Services</Link>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <Link to="/projects" className="item">Projects</Link>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <Link to="/contact" className="item">Contact</Link>
                </li>
            </ul>
        </div>

    );
}

export default Menu;