import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="watch__container">
        <div className="watch__box">
          <p className="watch__show">Enjoy the show!</p>
          <p className="watch__genre">GENRE</p>
          <p className="watch__content">Content Name</p>
          <p></p>
          <p className="watch__rating">Rating &#9734; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
        <button className="watch__button">WATCH NOW</button>
      </div>
    </div>
  );
}
