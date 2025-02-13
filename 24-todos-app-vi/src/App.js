import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  
  return (
    <div className="App">
      <h1>Todo app</h1> 
      <TodoForm addTodo = {addTodoHandler}/>
      <TodoList todos={todos} deleteTodo = {deleteTodoHandler} />
    </div>
  );
}

export default App;
