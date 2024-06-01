import iconStar from "../images/icon-star.svg";
import "../Styles/WindowScore.css";
import Score from "../Components/score.jsx";

const WindowScore = ({ score, setScore, setpopups, popups }) => {
  const handleSubmit = () => {
    if (score != 0) {
      setpopups(!popups);
    } else {
      alert("You must select a number.");
    }
  };

  return (
    <section className="container-windowScore">
      <div className="container-icon-star animate__animated animate__bounceIn">
        <img src={iconStar} alt="icon-star" />
      </div>
      <div className="container-text">
        <h2 className="overpass-700 animate__animated  animate__zoomIn">
          How did we do?
        </h2>
        <h3 className="overpass-400 animate__animated  animate__zoomIn">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h3>
      </div>

      <div className="container-buttons">
        <Score number={1} score={score} setScore={setScore} />
        <Score number={2} score={score} setScore={setScore} />
        <Score number={3} score={score} setScore={setScore} />
        <Score number={4} score={score} setScore={setScore} />
        <Score number={5} score={score} setScore={setScore} />
      </div>
      <button
        className="button-submit animate__animated animate__bounceIn"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </section>
  );
};

export default WindowScore;
