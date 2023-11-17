import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <img src={Logo} alt="logo-image" className="leftside-logo" />
            </div>
            <div className="rightside">
                <ul className="rightside__list-parent">
                    <li className="rightside__list-item">
                        <Link to="/">About</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="rightside__list-item--hover">
                        <Link to="/login">
                            <button className="rightside__list-item--button">Get the App</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
