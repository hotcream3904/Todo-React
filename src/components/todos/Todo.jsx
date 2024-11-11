import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({todo, handleCheckTodo, handleDeleteTodo}) {

  const {id, text, status} = todo

  return (
    <div className="todo">
        <input type="checkbox" id="checkbox" onChange={()=>handleCheckTodo(todo)} checked={status === "Completed"}/>
        {status === "Active" ? <p>{text}</p> : <p style={{textDecoration : 'line-through'}}>{text}</p>}
        <button className="deleteButton" onClick={()=>handleDeleteTodo(id)}><FaTrashAlt /></button>
    </div>
  )
}
