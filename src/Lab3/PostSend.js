import axios from "axios"
import React, { Component } from "react"

class PostSend extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:"",
            title:"",
            body:""

        }
    }


    handleInputChange=(event)=>{
            this.setState(
                {
                    [event.target.name]:event.target.value
                }
            )
    }

    handleSubmit=(event)=>{
            event.preventDefault()
            axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
    }

    render(){
        return(
            <div>
                <h3>Form to send a post</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name="userId" type="number" onChange={this.handleInputChange} placeholder="Enter User Id"/>
                    <input name="title" type="text" onChange={this.handleInputChange} placeholder="Enter title"/>
                    <input name="body" type="textarea" onChange={this.handleInputChange} placeholder="Enter body"/>          
                    <input type="submit" value="Post"/>
                
                </form>
            </div>
        )
    }
}
    export default PostSend