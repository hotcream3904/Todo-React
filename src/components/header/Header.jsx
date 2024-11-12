import axios from "axios";
import React from 'react'
import { MdSunny } from "react-icons/md";


export default function Header({filterList, setFilter, setTodos}) {

  const handleFilterTodo = async (value) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/${value === "All" ? "" : value}`)
    .then(response => setTodos(response.data))
    .catch(error => console.error("Error fetching data: ", error))
    setFilter(value)
  }

  return (
    <header>
      <div>
         <MdSunny />
      </div>
      <div>
       {filterList.map((value, index)=>(
          <div key={index}><button onClick={()=>handleFilterTodo(value)}>{value}</button></div>
       ))}
      </div>
    </header>
  )
}
