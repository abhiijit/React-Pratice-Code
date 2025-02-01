import React, { useState, useCallback, useEffect } from "react";

function Timer2() {
  const [timer, setTimer] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerNull, setTimerNull] = useState(null);

  const handleStart = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      let timerId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      setTimerNull(timerId);
    }
  };

  const handleStop = () => {
    if (isTimerRunning) {
      clearInterval(timerNull);
      setIsTimerRunning(false);
    }
  };

  const handleReset = () => {
    handleStop();
    setTimer(300);
  };

  const getTimerValue = (time) => {
    const sec = time % 60;
    const min = Math.floor(time / 60);
    return (
      <>
        <h1>{min}:</h1>
        <h1>{sec.toString().padStart(2, "0")}</h1>
      </>
    );
  };

  return (
    <>
      <label style={{ display: "flex", justifyContent: "center" }}>
        {getTimerValue(timer)}
      </label>
      <br />
      <br />
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default Timer2;
