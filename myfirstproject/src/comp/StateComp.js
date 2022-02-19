import React, { Components } from 'react';
class StateComp extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"APSSDC SPVM WorkShop",
            age:15
        }
    }
    render () {
        
     
        return (
            <div>
                <h1>hai {this.state.name}</h1>
                <h3>Age: {this.state.age}</h3>
            </div>
        )
    }
}
export default StateComp;