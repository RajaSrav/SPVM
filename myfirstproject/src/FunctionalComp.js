import React,{useState} from 'react'

function FunctionalComp() {

  let [name,updateName]=useState("Raja");
  return (
      <div>
          <h1 onMouseOver={()=>{updateName("RajaS")}}
          onMouseLeave={()=>{updateName("GKRajaS")}}>
                  {name}
          </h1>
      </div>
  )
}
export default FunctionalComp