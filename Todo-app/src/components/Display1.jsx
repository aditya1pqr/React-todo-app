import React from 'react'
import Display2 from './Display2.jsx'

function Display1({tasks,handledelete}) {
  
 

  return (
    <>
     
     {tasks.map((item)=>(<Display2  key={item.taskName} taskName={item.taskName} dateName={item.dateName} handledelete={handledelete} ></Display2>))
           

     }
    </>
  )
}

export default Display1
