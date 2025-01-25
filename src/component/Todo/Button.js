import React from 'react'

const Button = ({handleTodoBtn}) => {
  return (
    <>
    <button type='button' onClick={handleTodoBtn}>Add</button>
    </>
  )
}

export default Button