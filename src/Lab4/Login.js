import "./Login.css"
import { Component } from "react";
class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            loggedIn:false
        }
    }

    handleLogin=(event)=>{
        event.preventDefault()
        this.setState(
            {
                loggedIn:true
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    }
}

export default Login