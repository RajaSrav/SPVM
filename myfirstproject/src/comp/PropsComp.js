import React from 'react';

class PropsComp extends React.Component{
    render(){
        return(
            <div>
                <h3>Welcome to APSSDC</h3>
                <ChaildComponent name="Sri Padmavathi Engineering College" />

            </div>
        )
    }
}

const ChaildComponent = (props) =>  {
    return <h1>Welcome to Students From {props.name} </h1>
}

export default PropsComp;