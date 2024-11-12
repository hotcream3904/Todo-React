import React, { useState } from 'react'
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../../api/todo";

export default function UserInput() {
const [todo, setTodo] = useState("")

const client = useQueryClient();

const postMutation = useMutation(postTodo, {
  onSuccess: () => {
    client.invalidateQueries('todos');
    console.log('전송성공 :>> ');
  },
  onError: (error) => {
    console.error("Error deleting todo:", error);
  },
})

const handleAddTodo = () => {
  if (todo.trim()) { // 빈 todo를 방지
    postMutation.mutate(todo);
  }
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
