import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function Todos({todos, setTodos}) {
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  function handleCheckTodo(todo) {
    const {status, id, text} = todo
    const newTodo = {
      id,
      status : status === "active" ? "completed" : "active",
      text
    }
    const newTodos = todos.map((todo)=> todo.id === id ? newTodo : todo)
    setTodos(newTodos)
  }

  return (
  <main>
    <div className="todos">
    {todos.map(todo => todo.status === "active" ?
      <div className="todo" key={todo.id}>
         <input type="checkbox" id="checkbox" onChange={()=>handleCheckTodo(todo)}/>
         <p>{todo.text}</p>
         <button className="deleteButton" onClick={()=>handleDeleteTodo(todo.id)}><FaTrashAlt /></button>
      </div>
     : <div className="todo" key={todo.id}>
     <input type="checkbox" id="checkbox" onChange={()=>handleCheckTodo(todo)}/>
     <p style={{textDecoration : 'line-through'}}>{todo.text}</p>
     <button className="deleteButton" onClick={()=>handleDeleteTodo(todo.id)}><FaTrashAlt /></button>
  </div> )}
    </div>
  </main>
  )
}
