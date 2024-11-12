import React from 'react'
import Todo from "./Todo";
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from "../../api/todo";

export default function Todos({todos, setTodos}) {

  const client = useQueryClient();

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // 데이터를 다시 가져오도록 설정 (예: todos 목록을 최신화)
      client.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error("Error deleting todo:", error);
    },
  })
   const handleDeleteTodo = (id) => {
    deleteMutation.mutate(id)
  }

   const handleCheckTodo = async (todo) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/${todo.id}`)
    .catch(error => console.error("Error fetching data: ", error));
  }

  return (
  <main>
    <div className="todos">
      {todos.map(
        todo =>
        <Todo key={todo.id} todo={todo} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo}/>
      )}
    </div>
  </main>
  )
}
