import {Component} from "react";




class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
                        loggedIn: false,
                        subscription: "Guest"
                    }
    }
    
    login=()=>{
            this.setState(
                {
                    isloggedIn: true,
                    subscription:"You now have a subscription"
                }
            )
    } 



    render() {
        
        return (
            <div>
                <button onClick={this.login}>Login</button>
                <p>My login state is: {this.state.isloggedIn?"True":"False"}</p>
                <p>My subscription state is: {this.state.subscription}</p>
            </div>
        );
    }
}


export default LoginComponent;

