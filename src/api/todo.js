import axios from 'axios';

export const fetchTodo = async() => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
    return response.data;
}

export const deleteTodo = async(id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
}

export const postTodo = async(todo) => {
    const newTodo = {
        "text" : todo
      }
    await axios.post(`${process.env.REACT_APP_API_URL}/`, newTodo)
}