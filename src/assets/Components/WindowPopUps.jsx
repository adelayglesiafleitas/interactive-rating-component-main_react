import thankYou from "../images/illustration-thank-you.svg";
import "../Styles/WindowPopUps.css";
import { useEffect, useState } from "react";
const WindowPopUps = ({ score, setpopups, popups }) => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setpopups((popups) => !popups);
    }, 4000);

    const counterInterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <section className="container-WindowPopUps ">
      <img
        className="animate__animated animate__flipInX"
        src={thankYou}
        alt="img-thank-You "
      />
      <div className="container-select animate__animated animate__flipInX">
        <h2 className="overpass-700">You selected {score} out of 5</h2>
      </div>
      <div className="container-WindowPopUpsText">
        <h3 className=" animate__animated animate__flipInX">Thank you!</h3>
        <h4 className=" animate__animated animate__flipInX">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </h4>
      </div>
      <p className="overpass-700 animate__animated animate__zoomIn">
        {" "}
        The window will close in {counter}
      </p>
    </section>
  );
};

export default WindowPopUps;
