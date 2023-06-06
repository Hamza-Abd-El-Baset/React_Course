import Login from "./Login";
import "./SignUp.css"
import { useState } from "react";

function SignUpHooks() {

    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:"",
        signedUp:false
    })

    

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Thank you ${userData.username} You successfully registred and your email is ${userData.email}`)
        setUserData({...userData, signedUp:true})
    }

    const handleInput=(event)=>{
        setUserData({...userData, [event.target.name]:event.target.value})
    }

    
        return userData.signedUp?<Login/>:(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input name="username" type="text" placeholder="User Name" onChange={handleInput}/>
                    <input name="email" type="email" placeholder="Email" onChange={handleInput}/>
                    <input name="password" type="password" placeholder="Password" onChange={handleInput}/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    
}

export default SignUpHooks