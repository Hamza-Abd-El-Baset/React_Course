import React , {Component} from "react";
import Component4 from "./Component4"
import UserContext from "./UserContext";

class Component3 extends Component{

    render(){
        return(
            <div>
                Value passed to Component 3 is: {this.context}
                <Component4/>
            </div>
        )
         
    }
    

}

Component3.contextType=UserContext

export default Component3