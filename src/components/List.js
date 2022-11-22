import React from 'react'

function List(props) {
    
         
    
    return (
      <div className=' my-2'>
        <p className='' id="para "  >{props.todo.name}</p>
        <div className="btn btn-sm btn-danger mx-1" onClick={ ()=>{props.onDelete(props.todo)}}>Delete</div>
      </div>
    )
  }
export default List
