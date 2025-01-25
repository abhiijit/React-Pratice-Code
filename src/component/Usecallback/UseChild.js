import React from 'react'

const UseChild = React.memo(({lbl}) => {
    console.log(lbl,"Child Component Rending")
  return (
    <div>
      <p>{lbl}</p>
    </div>
  )
})

export default UseChild