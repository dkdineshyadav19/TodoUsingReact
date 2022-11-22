
import './App.css';
import Input from './components/Input';
import React ,{useState,useEffect} from 'react'
function App() {
  let savedtodos;
  if(localStorage.getItem("myTodos")===null || localStorage.getItem("myTodos")==='')
  {
    savedtodos=[];
  }
  else
  {
    savedtodos=JSON.parse(localStorage.getItem("myTodos"));
  }

   //deleting todo
  const onDelete=(todo)=>
  {
  
    setTodos(todos.filter( (e)=>{
      return todo!==e;
    }));

    localStorage.setItem("myTodos",JSON.stringify(todos));
    
  }
  //adding new todo
  const onUpdate=(name,val=false)=>{
    let new1={
      key:todos.length+1,
      name:name,
      task:val,
      
    }
 
    setTodos([...todos,new1])
   
    
   
    
  }
  //


     //decalring todo using state
     const [todos,setTodos]=useState(savedtodos);
     useEffect(()=>{
       localStorage.setItem("myTodos",JSON.stringify(todos));
     },[todos])

  return (
    <div className='container'>
      <Input todos={todos} onDelete={onDelete} onUpdate={onUpdate} />

    </div>

  );
}

export default App;
