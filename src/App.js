import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Todos from "./components/todos/Todos.jsx";
import UserInput from "./components/userInput/UserInput.jsx";
import axios from 'axios';

const filterList = ['All', 'Active', 'Completed']

function App() {

const [filter, setFilter] = useState(filterList[0])
const [todos, setTodos] = useState([])

useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setTodos(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);


return (
  <>
    <Header filterList={filterList} setFilter={setFilter}/>
    <Todos filter={filter} todos={todos} setTodos={setTodos}/>
    <UserInput todos={todos} setTodos={setTodos}/>
  </>
  );
}

export default App;
