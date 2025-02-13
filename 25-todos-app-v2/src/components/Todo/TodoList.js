
import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
        {!todos.length && <h3>No todos yet</h3>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo ={toggleTodo}/>
      ))}
    </div>
  );
}

export default TodoList;
