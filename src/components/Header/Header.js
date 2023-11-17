import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/user-img.png";

function Header() {
    return (
        <nav className="navbar">
            <div className="leftside">
                <img src="" alt="logo-image" />
            </div>
            <div className="rightside">
                <ul className="rightside__list-parent">
                    <li className="rightside__list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/cart">Movies</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/cart">Tv Shows</Link>
                    </li>
                    <li className="rightside__list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="rightside__list-item--hover">
                        <Link to="/login">
                            <img className="rightside__profile" src={userImg} alt="profile pic" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;