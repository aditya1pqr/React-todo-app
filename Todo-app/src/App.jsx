import './App.css'
import TodoHeading from './components/TodoHeading'
import AddTodo from './components/AddTodo'
import Display1 from './components/Display1'

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
 const Tasks=[{
  taskName: "get sugar",
  dateName:"04/12/23"
 },
 {
  taskName: "go to  school",
 dateName:"04/10/23"
 
 }
]

  return (
    <center>
      <TodoHeading></TodoHeading>
      <AddTodo></AddTodo>
      <Display1 tasks={Tasks}></Display1>
      
    </center>
  )
}

export default App
