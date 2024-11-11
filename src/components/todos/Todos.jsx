import React from 'react'
import Todo from "./Todo";

export default function Todos({filter, todos, setTodos}) {
   const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

   const handleCheckTodo = (todo) => {
    const {status, id, text} = todo
    const newTodo = {
      id,
      status : status === "Active" ? "Completed" : "Active",
      text
    }
    const newTodos = todos.map((todo)=> todo.id === id ? newTodo : todo)
    setTodos(newTodos)
  }

  const filtered = getFilterdTodo(todos,filter)

  return (
  <main>
    <div className="todos">
      {filtered.map(
        todo => <Todo todo={todo} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo}/>
      )}
    </div>
  </main>
  )
}

function getFilterdTodo(todos, filter) {
  if(filter === 'All') {
    return todos
  }
  return todos.filter((todo)=> todo.status === filter)
}