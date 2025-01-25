import React,{useCallback, useState} from 'react'
import UseChild from './UseChild'

const Usecallback = () => {
    const [count, setCount] = useState(0)

    const handleIncCount = useCallback(() => {
        setCount((prev) => prev + 1)
    },[])
    console.log('Counter rendered');
  return (
    <>
    <UseChild lbl="Rendering Child Comp"/>
    <label>{count}</label>
    <br/>
    <button type='button' onClick={handleIncCount}> Incerment Count</button>
    </>
  )
}

export default Usecallback