import Login from "./Login";
import "./SignUp.css"
import { Component } from "react";

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            signedUp:false
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Thank you ${this.state.username} You successfully registred and your email is ${this.state.email}`)
        this.setState(
            {
                signedUp:true
                
            }
        )
    }

    handleInput=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            }
           )
    }

    render(){
        return this.state.signedUp?<Login/>:(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" placeholder="User Name" onChange={this.handleInput}/>
                    <input name="email" type="email" placeholder="Email" onChange={this.handleInput}/>
                    <input name="password" type="password" placeholder="Password" onChange={this.handleInput}/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default SignUp