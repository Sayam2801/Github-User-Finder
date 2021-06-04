import React from 'react';
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Navbar = ({ icon,title}) => {
    return (
        <nav className="Navbar">
            <h1><i className={icon} /><span className="Navbar_title">{title}</span></h1>
            {/* <ul>
               <li>
                <a href="/">Home</a>
               </li>
               <li>
                 <a href="/about">About</a>
               </li>
            </ul> */}
            <span className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
};

//Default props
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
};
//Defining props types
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar;