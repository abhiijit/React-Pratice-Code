import React,{useState} from 'react'

const Toggle = ({node}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    <div style={{ marginLeft: "20px", borderLeft: "1px solid #ccc", paddingLeft: "10px" }}>
      <div onClick={toggleOpen} style={{ cursor: "pointer" }}>
        {node.text}
      </div>
      {isOpen && node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <Toggle key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Toggle