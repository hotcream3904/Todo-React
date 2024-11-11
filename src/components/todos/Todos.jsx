import React from 'react'
import Todo from "./Todo";
import axios from "axios";

export default function Todos({filter, todos, setTodos}) {

   const handleDeleteTodo = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
    .then(response => console.log('response :>> ', response))
    .catch(error => console.error("Error fetching data: ", error));
  }

   const handleCheckTodo = (todo) => {
    axios.put(`${process.env.REACT_APP_API_URL}/${todo.id}`)
    .then(response => console.log('response :>> ', response))
    .catch(error => console.error("Error fetching data: ", error));
  }

  const filtered = getFilterdTodo(todos,filter)

  return (
  <main>
    <div className="todos">
      {filtered.map(
        todo =>
        <Todo key={todo.id} todo={todo} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo}/>
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