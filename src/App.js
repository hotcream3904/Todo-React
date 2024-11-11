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

//useEffect 훅을 사용해 네트워크 통신을 해야하는 이유
//setTodos로 state가 변경되니 다시 App이 호출되고 그럼 다시 네트워크 통신을 통해 state를 변경시키고 무한루프에 빠지게 됨.
//컴포넌트가 보여질때 첫번째만 네트워크 통신을 해서 데이터를 받아오고 다시는 데이터를 받아오지 않아야 무한루프에 빠지지 않음.
useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setTodos(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);


return (
  <>
    <Header filterList={filterList} setFilter={setFilter} setTodos={setTodos}/>
    <Todos filter={filter} todos={todos} setTodos={setTodos}/>
    <UserInput todos={todos} setTodos={setTodos}/>
  </>
  );
}

export default App;
