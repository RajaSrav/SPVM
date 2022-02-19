import React,{useState} from 'react'

function StateUsingFunctionalComp() {
    let [name,upDateName] = useState("APSSDC")
  return (
    <div>
        <h1 onMouseOver={() => {upDateName("AP Skill")}} 
        onMouseLeave = {() => {upDateName("Andhrapradesh State Skills Center")}}> {name}</h1>
       
    </div>
  )
}

export default StateUsingFunctionalComp