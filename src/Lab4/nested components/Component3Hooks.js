import React, { useContext } from "react";
import Component4Hooks from "./Component4Hooks"
import UserContextHooks from "./UserContextHooks";

function Component3Hooks() {
   
        const context=useContext(UserContextHooks)
        return(
            <div>
                Value passed to Component 3 is: {context}
                <Component4Hooks/>
            </div>
        )
    

}

Component3Hooks.contextType=UserContextHooks

export default Component3Hooks