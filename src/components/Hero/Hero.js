import "./Hero.scss";
import Tv from "../../assets/images/Hero.png";

function Hero() {
    return (
        <>
            <section className="hero__container">
                <div className="hero__container-titlebox">
                    <h1 className="hero__container-title">
                        Find something to watch before your food gets cold.
                    </h1>
                </div>
                <div className="hero__container-textbox">
                    <h2 className="hero__container-text">
                        Streaming recommendations catered to you through a whole new experience.
                    </h2>
                </div>
                <img src={Tv} className="hero__container-image" />
            </section>
        </>
    );
}

export default Hero;
