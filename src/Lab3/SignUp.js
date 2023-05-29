import "./SignUp.css"
import { Component } from "react";

class SignUp extends Component{
    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Please Enter Your Name"/>
                </form>
            </div>
        )
    }
}

export default SignUp