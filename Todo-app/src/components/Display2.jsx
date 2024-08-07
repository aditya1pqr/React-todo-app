import React from 'react'

function Display2({taskName,dateName, handledelete}) {
  return (
    <div>
      <div className="d-flex justify-content-between diplay">
                 <div className="p-2">{taskName}</div>
                 <div className="p-2">{dateName}</div>
                 <div className="p-2"><button type="button" className="btn btn-danger del" onClick={()=>handledelete(taskName)}>Delete</button></div>
     </div>        
     </div>
  )
}

export default Display2
