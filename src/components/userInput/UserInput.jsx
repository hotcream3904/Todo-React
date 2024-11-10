import React, { useState } from 'react'

export default function UserInput() {
const [todo, setTodo] = useState("")
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

function handleAddTodo ({todos, setTodos}) {
  const newTodo = {
    id : generateId(),
    status : "Active",
    text : todo
  }
  setTodos([...todos, newTodo])
  setTodo("")
}
function handleChangeTodo(e) {
  setTodo(e.target.value)
}
  return (
    <section>
    <div>
      <input type="text" placeholder="Add Todo" onChange={handleChangeTodo} value={todo}/><button onClick={handleAddTodo}
      >Add</button>
    </div>
  </section>
  )
}
