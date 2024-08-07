import React from 'react'
import Display2 from './Display2.jsx'

function Display1({tasks}) {
  console.log(tasks)
  const handledelete = ()=>{

  }

  return (
    <>
     
     {tasks.map((item)=>(<Display2 taskName={item.taskName} dateName={item.dateName} handledelete={handledelete} ></Display2>))
           

     }
    </>
  )
}

export default Display1
