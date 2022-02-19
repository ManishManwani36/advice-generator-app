import React, { useEffect, useState } from "react";
import "./AdviceCard.css";

function AdviceCard() {
  const [advice, setadvice] = useState(null);

  async function getAdvice() {
    setadvice(null)
    const url = "https://api.adviceslip.com/advice";

    const response = await fetch(url);
    const responseJson = await response.json();

    setadvice(responseJson);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <div className="card__container">
        <div className="card">
          <div className="card__description">
            <h1>Advice #{advice ? advice.slip.id : null}</h1>
            <p>"{advice ? advice.slip.advice : "Loading..."}"</p>
            <div className="card__divider"></div>
          </div>
        </div>
        <div onClick={getAdvice} className="advice-btn">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default AdviceCard;
