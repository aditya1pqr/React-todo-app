import React from 'react'

function AddTodo() {
  return (
    <div>
       <div className="d-flex justify-content-between adddisplay">
          <div className="p-2 "><input type="text" name="" id="" /></div>
         <div className="p-2 "><input type="date" name="" id="" /></div>
         <div className="p-2 "><button type="button" className="btn btn-success dlet"> Add Task</button></div>
       </div>       
    </div>
  )
}

export default AddTodo
