import React from 'react'

export default function UserInput({handleChangeTodo, todo, handleAddTodo}) {
  return (
    <section>
    <div>
      <input type="text" placeholder="Add Todo" onChange={handleChangeTodo} value={todo}/><button onClick={handleAddTodo}
      >Add</button>
    </div>
  </section>
  )
}
