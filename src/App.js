import './App.css';

import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Todos from "./components/todos/Todos.jsx";
import UserInput from "./components/userInput/UserInput.jsx";

function App() {
const [todos, setTodos] = useState([
  {
  id : 123,
  status: "active",
  text: "메롱"
 },
 {
  id : 124,
  status: "active",
  text: "메롱2"
 },
])
const [todo, setTodo] = useState("")
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

function handleAddTodo () {
  const newTodo = {
    id : generateId(),
    status : "active",
    text : todo
  }
  setTodos([...todos, newTodo])
  setTodo("")
}
function handleChangeTodo(e) {
  setTodo(e.target.value)
}


return (
  <>
    <Header />
    <Todos todos={todos} setTodos={setTodos}/>
    <UserInput handleChangeTodo={handleChangeTodo} todo={todo} handleAddTodo={handleAddTodo}/>
  </>
  );
}

export default App;
