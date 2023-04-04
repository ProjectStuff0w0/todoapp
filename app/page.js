import AddTask from "./addTodo";
import TodoList from "./todoList";
import styles from './page.module.css';
export default function Home() {
  return (
   <div className={styles.main}>
    <AddTask />
    <TodoList />
    
   </div>
  )
}
