import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
        {!todos.length && <h3>No todos yet</h3>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
