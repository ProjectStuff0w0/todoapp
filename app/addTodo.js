'use client';
import styles from './page.module.css';
import { useReducer, useState } from "react";
import { useRouter } from 'next/navigation';

async function addTodo(name,refresh)
{
    await fetch(`/api/todo/add`,
    {
       method:"POST",
       body:JSON.stringify({name}),

    });
    refresh();
}

export default function AddTask()
{
    const router = useRouter();
    const [text,setText]=useState('');
    return (

    <div className={styles.customcard}>
        <input  type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={async ()=>
            {
                await addTodo(text,router.refresh);
                setText('');
            }
           }
            >Add</button>
    </div>

    );
    
    


}
