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

const onhandlechange = (ad, add) =>{
  console.log(ad);
  console.log(add)

  const newvalue = [...Tasks, {taskName:ad, dateName:add}]
  settask(newvalue)

}


  return (
    <center>
      <TodoHeading></TodoHeading>
      <AddTodo onhandlechange={onhandlechange}></AddTodo>
      <Display1 tasks={Tasks}></Display1>
      
    </center>
  )
}

export default App
