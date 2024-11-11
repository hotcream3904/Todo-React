import React, { useState } from 'react'

const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export default function UserInput({todos, setTodos}) {
const [todo, setTodo] = useState("")

const handleAddTodo = () => {
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
