export default function Theater() {
    return (
        <div className="theater-container">
            <div className="theater-hero">Hero image</div>
            <div className="theater-text">
                <h1 className="theater-text__header">
                    choose something to watch before your food gets cold
                </h1>
                <h2 className="theater-text__body">
                    quick description on how to use the app. Click on your favourite and watch any,
                    anytime!
                </h2>
                <div className="move-cards-container">
                    <div className="movie-card">
                        <img className="movie-card__poster" src="" alt="movie poster" />
                        <p>a description of the movie</p>
                        <button className="movie-card__button">Watch Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
