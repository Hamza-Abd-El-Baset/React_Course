import React from "react";
import { UserConsumerHooks } from "./UserContextHooks";

function Component5Hooks() {

        return(
            <UserConsumerHooks>
                {
                    (passedValue)=>{
                        return(
                        <div>Value passed to Component 5 is: {passedValue}</div>
                        )
                    }
                }
            </UserConsumerHooks>
        )

}

export default Component5Hooks