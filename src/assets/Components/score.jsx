import "../Styles/Score.css";

const Score = ({ number, score, setScore }) => {
  const handleOnClickScore = () => {
    setScore(number);
  };

  return (
    <button
      className={`button-score overpass-700 animate__animated animate__fadeIn ${
        number === score ? "button-white" : ""
      }`}
      onClick={handleOnClickScore}
    >
      {number}
    </button>
  );
};

export default Score;
