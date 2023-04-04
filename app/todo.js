"use client";

import { useRouter } from 'next/navigation';
import styles from './page.module.css';



async function update(id, isDone, refresh) 
{
  await fetch(`/api/todo/update`, 
  {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}


async function deleteTodo(id, refresh)
{
  await fetch(`/api/todo/delete?id=${id}`,
  {
    method: "DELETE",
  });

 refresh();
}

export default function Todo({ todo })
{

  const router = useRouter();

  return(
    <div className={styles.customdescription}>
      <span>{todo.name}</span>
      <input 
       type="checkbox"
       onChange={(e) => update(todo.id, e.target.checked,router.refresh) }
       checked={todo.isDone}
      />
      <button onClick={()=>deleteTodo(todo.id,router.refresh)}>Delete</button>
    </div>
  );
}