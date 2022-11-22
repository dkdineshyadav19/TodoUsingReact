import React ,{useState} from 'react'
import List from './List';
function Input(props) {

    const [name,setName]=useState('');
    const newTask =(event)=>{
        setName(event.target.value);
    }
    const addTask = ()=>{
        if(name==='')
        alert("input box cant be empty");
        else
        props.onUpdate(name,false);
        setName('');
    }
  
  return (
    <>
        <div className='my-3 d-flex justify-content-center align-items-center flex-column'>
            <h1 className='my-3'>My todo app</h1>
            <div className="bt">
                <input className='mx-1 my-1' type="text" value={name} onChange={newTask}/>
                <button className='btn btn-warning btn-sm' type="submit" onClick={addTask}>Add Task </button>
            </div>
        </div>
        <div className="container">
            <h3 className='text-warning'> Your Todos Are Below</h3>
           {props.todos.length===0?'No Task to diplay':props.todos.map((e)=>{
                
                return( 
                        <List todo={e} key={e.key} onDelete={props.onDelete} />
            )
            })}
        </div>
    </>
  )
}

export default Input;
