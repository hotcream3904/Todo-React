## 1.전체 리스트 보여주기
 ```javascript

// 1. Todo는 3개의 값이 필요함 -> 객체
// 2. 여러개의 Todo가 필요함 -> 배열
// 3. Todos 라는 배열 state 생성후 Todos.jsx 파일에서 관리
// 4. Todos 를 맵을 돌려 item값인 todo를 개별 컴포넌트이자 자식 컴포넌트인 Todo.jsx 로 보내준다.

import React from 'react'
import Todo from "./Todo";

export default function Todos() {

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
      {Todo.map(
          todo => <Todo todo={todo} />
       )}
    </>
 )
}
```

## 2.아이템 삭제

 ```javascript
// 1. 각각의 todo에서 id값을 가져오기
// 2. todos 배열의 filter 메서드로 삭제하려는 값(1번)과 todos 배열 내의 id가 다른것만 남긴다. => 같은 값을 삭제하겠다는 의미

   const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  <button onClick={()=>handleDeleteTodo(id)}>삭제</button>

```
## 3.아이템 체크박스

 ```javascript
// 1. 각각의 todo에서 객체값 자체로 가져오기
// 2. status 값을 Active면 Completed로, 아니라면 그 반대로 해서 새로운 객체를 setTodos 하기
// 3. input에서 checked라는 속성으로 체크한 것 유지되게끔 하기

    const handleCheckTodo = (todo) => {
    const {status, id, text} = todo
    const newTodo = {
      id,
      status : status === "Active" ? "Completed" : "Active",
      text
    }
    const newTodos = todos.map((todo)=> todo.id === id ? newTodo : todo)
    setTodos(newTodos)
  }

  <input type="checkbox" id="checkbox" onClick={()=>handleCheckTodo(todo)} checked={status === "Completed"}/>

```
## 4.아이템 추가
 ```javascript

```
## 5.아이템 필터링
 ```javascript


```
## 6.다크모드 지원
 ```javascript

```
## 7.로컬스토리지에 저장
 ```javascript

```

