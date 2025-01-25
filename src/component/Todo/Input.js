import React from 'react'

const Input = ({addTxt, setAddTxt}) => {
  return (
    <>
    <input type='text' value={addTxt} placeholder='Enter Text' onChange={(e) => setAddTxt(e.target.value)}/>
    </>
  )
}

export default Input