import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Todos from "./components/todos/Todos.jsx";
import UserInput from "./components/userInput/UserInput.jsx";
import { useQuery } from "react-query";
import { fetchTodo } from "./api/todo.js";

const filterList = ['All', 'Active', 'Completed']

function App() {
const [filter, setFilter] = useState(filterList[0])
const [todos, setTodos] = useState([])

const { data , isLoading, isError, error } = useQuery('todos', fetchTodo);
useEffect(() => {
  if (data) {
    setTodos(data);  // 데이터를 todos 상태에 담음
  }
}, [data]);

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error: {error.message}</div>;


return (
  <>
    <Header filterList={filterList} setFilter={setFilter} setTodos={setTodos}/>
    <Todos todos={todos} setTodos={setTodos}/>
    <UserInput todos={todos} setTodos={setTodos}/>
  </>
  );
}

export default App;
