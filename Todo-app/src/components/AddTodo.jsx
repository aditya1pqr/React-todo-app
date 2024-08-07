import React, { useState } from 'react'

function AddTodo({onhandlechange}) {
  const [addvalue, setaddvalue] = useState("")
  const [adddate, setadddate] = useState("")
  const handleaddvalue = (event) =>{
    setaddvalue(event.target.value)
  }
  const handledatevalue = (event) =>{
    setadddate(event.target.value)
  }

  const handlenewvalue= ()=>{
    onhandlechange(addvalue, adddate)
    
    setaddvalue("");
    setadddate("");
  }

  return (
    <div>
       <div className="d-flex justify-content-between adddisplay">
          <div className="p-2 "><input type="text"  value={addvalue} name="" id="" onChange={handleaddvalue} /></div>
         <div className="p-2 "><input type="date" name="" value={adddate} id="" onChange={handledatevalue} /></div>
         <div className="p-2 "><button onClick={handlenewvalue} type="button" className="btn btn-success dlet"> Add Task</button></div>
       </div>       
    </div>
  )
}

export default AddTodo
