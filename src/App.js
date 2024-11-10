import './App.css';
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Todos from "./components/todos/Todos.jsx";
import UserInput from "./components/userInput/UserInput.jsx";

const filterList = ['All', 'Active', 'Completed']

function App() {
const [filter, setFilter] = useState(filterList[0])
const [todos, setTodos] = useState([
  {
  id : 123,
  status: "Active",
  text: "메롱"
 },
 {
  id : 124,
  status: "Active",
  text: "메롱2"
 },
])

return (
  <>
    <Header filterList={filterList} setFilter={setFilter}/>
    <Todos filter={filter} todos={todos} setTodos={setTodos}/>
    <UserInput todos={todos} setTodos={setTodos}/>
  </>
  );
}

export default App;
