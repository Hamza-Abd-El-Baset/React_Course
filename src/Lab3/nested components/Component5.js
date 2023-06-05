import React , {Component} from "react";
import { UserConsumer } from "./UserContext";

class Component5 extends Component{

    render(){
        return(
            <UserConsumer>
                {
                    (passedValue)=>{
                        return(
                        <div>Value passed to Component 5 is: {passedValue}</div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
    

}

export default Component5