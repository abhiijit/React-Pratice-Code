import React, { useState, useEffect } from "react";
import "./WorkoutTimer.css";

const WorkoutTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [clearTimer, setClearTimer] = useState(null);

  const handleStart = () => {
    let timerId;
    if (!isRunning) {
      setIsRunning(true);
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    setClearTimer(timerId);
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(clearTimer);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    handlePause();
    setTimer(0);
  };

  const getTimerRun = (second) => {
    const sec = second % 60;
    const min = Math.floor(second / 60);
    const hour = Math.floor(min / 60);
    return (
      <div className="min_timer">
        <h1>{hour.toString().padStart(2, "0")}:</h1>
        <h1>{min.toString().padStart(2, "0")}:</h1>
        <h1>{sec.toString().padStart(2, "0")}</h1>
      </div>
    );
  };
  return (
    <>
      <div className="timer_border">
        <div className="heading_timer">
          <h1>Workout Timer</h1>
        </div>
        {getTimerRun(timer)}
        <div className="button_block">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default WorkoutTimer;
