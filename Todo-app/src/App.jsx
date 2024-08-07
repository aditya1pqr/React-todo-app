import './App.css'
import TodoHeading from './components/TodoHeading'
import AddTodo from './components/AddTodo'
import Display1 from './components/Display1'

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from 'react'

function App() {
 const pretasks=[{
  taskName: "get sugar",
  dateName:"04/12/23"
 },
 {
  taskName: "go to  school",
 dateName:"04/10/23"
 
 }
]

const [Tasks, settask] = useState(pretasks)

const onhandlechange = (value, date) =>{
 
  const newvalue = [...Tasks, {taskName:value, dateName:date}]
  settask(newvalue)

}

const handledelete = (deletedtask)=>{
  const newararyvalues = Tasks.filter((a)=>a.taskName !== deletedtask)
  settask(newararyvalues)
   }

  return (
    <center>
      <TodoHeading></TodoHeading>
      <AddTodo onhandlechange={onhandlechange}></AddTodo>
      <Display1 tasks={Tasks} handledelete={handledelete}  ></Display1>
      
    </center>
  )
}

export default App
