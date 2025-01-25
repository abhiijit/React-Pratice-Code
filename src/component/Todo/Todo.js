import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import ListItems from './ListItems'

const Todo = () => {
    const [addTxt, setAddTxt] = useState("")
    const [list, setList] = useState([
        {
            id: 1,
            name: "Abhi",
            complete : false
        },
        {
            id: 2,
            name: "Sudhanva",
            complete : false
        }
    ])
    const handleTodoBtn = () => {
        if(addTxt.trim() === "") {
            alert("Please enter text in input field")
            return false
        }

        const newTxtItem = {
            id: Date.now(),
            name: addTxt
        }
        setList([...list, newTxtItem])
        setAddTxt("")
    }

    const handleDelete = (id) => {
        setList(list.filter((checkItem) => checkItem.id != id))
    }

    const toggleComplete = (id) => {
        setList(list.map((item) => item.id === id ? {...item, complete: !item.complete} : item))
    }
  return (
    <>
    <Input addTxt={addTxt} setAddTxt={setAddTxt} />
    <Button handleTodoBtn={handleTodoBtn} />
    <br/>
    <ListItems list={list} handleDelete={handleDelete} toggleComplete={toggleComplete}/>
    </>
  )
}

export default Todo