import React, {useState} from 'react'

const Timer = () => {
    const [timerCnt, setTimerCnt] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [clearTimer, setClearTimer] = useState(null);

    const handleStart = () => {
        if(!timerRunning){
            setTimerRunning(true)
            const timer = setInterval(() => {
                setTimerCnt((prev) => prev + 1)
            }, 1000)
            setClearTimer(timer)
        }        
    }

    const handleStop = () => {
        if(timerRunning){
            setTimerRunning(false);
            clearInterval(clearTimer)
            setClearTimer(null)
        }
    }

    const handleReset = () => {
        handleStop()
        setTimerCnt(0)
    }

  return (
    <>
    <label>{timerCnt}</label>
    <br/>
    <button type='button' onClick={handleStart}>Start</button>
    <button type='button' onClick={handleStop}>Stop</button>
    <button type='button' onClick={handleReset}>Reset</button>
    </>
  )
}

export default Timer