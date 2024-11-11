import axios from "axios";
import React, { useState } from 'react'

export default function UserInput({todos, setTodos}) {
const [todo, setTodo] = useState("")


const handleAddTodo = () => {
  const postTodo = {
    "text" : todo
  }
  axios.post(`${process.env.REACT_APP_API_URL}/`, postTodo)
  .then(response => {
    console.log("데이터 전송 성공:", response);
  })
  .catch(error => {
    console.error("데이터 전송 실패:", error);
  });
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
