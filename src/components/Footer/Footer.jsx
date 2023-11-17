import "./Footer.scss";
import twitterIcon from "../../assets/icons/Icon-twitter.svg";
import facebookIcon from "../../assets/icons/Icon-facebook.svg";
import instagramIcon from "../../assets/icons/Icon-instagram.svg";
import Logo from "../../assets/images/logo.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src={Logo} className="footer__left__logo" />
                <div className="footer__left__text">
                    <p>Immerse yourself in a world of endless entertainment with Kameleon. Let your mood be the guide as you explore a world of content tailored just for you. Elevate your streaming experience with us!</p>
                </div>
                <div className="footer__left__icons">
                    <a href="https://x.com" target="_blank" rel="noreferrer">
                        <img className="footer__left__icons__icon" src={twitterIcon} alt="twitter icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img className="footer__left__icons__icon" src={facebookIcon} alt="facebook icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img className="footer__left__icons__icon" src={instagramIcon} alt="instagram icon" />
                    </a>
                </div>
            </div>
            <div className="footer__right">
                <div className="footer__right__heading">
                    <p className="footer__right__heading__text">Join our newsletter</p>

                    <form className="footer__right__heading-form">
                        <input type="text" placeholder="Enter your email" name="search" className="footer__right__heading-box"></input>
                        <button type="submit" className="footer__right__heading-button">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="footer__right__text">
                    <div className="footer__right-links">
                      <div className="footer__right-linksleft">
                        <a href="" className="footer__right__text__contentleft">
                            Home
                        </a>
                        <a href="" className="footer__right__text__contentleft">
                            About
                        </a>
                        <a href="" className="footer__right__text__contentleft">
                            Blog
                        </a>
                        <a href="" className="footer__right__text__contentleft">
                            Contact Us
                        </a>
                        </div>
                        <div className="footer__right-linksright">
                        <a href="" className="footer__right__text__contentright">
                            Privacy
                        </a>
                        <a href="" className="footer__right__text__contentright">
                            Cookies
                        </a>
                        <a href="" className="footer__right__text__contentright">
                            Terms
                        </a>
                        <p className="footer__right__text__copyright">Copyright Kameleon Inc., 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
