import "./Hero.scss";

function Hero() {
    return (
        <>
            <section className="hero__container">
                {/* <div className="hero__container-contentbox"> */}
                    <div className="hero__container-titlebox">
                        <h1 className="hero__container-title">Title content</h1>
                        <h1 className="hero__container-title">Title content</h1>
                    </div>
                    <div className="hero__container-textbox">
                        <h2 className="hero__container-text">Subtext will go here.</h2>
                        <h2 className="hero__container-text">Subtext will go here.</h2>
                    </div>
                    {/* </div> */}
                {/* <img src="" className="hero__container-image" /> */}
                <div className="hero__container-image"></div>
            </section>
        </>
    );
}

export default Hero;
