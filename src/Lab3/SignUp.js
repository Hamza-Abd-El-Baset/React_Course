import "./SignUp.css"
import { Component } from "react";

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            signedUp:false
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState(
            {
                signedUp:true
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="User Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default SignUp