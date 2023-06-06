import axios from "axios"
import React, { useState } from "react"

function PostSendHooks() {
    const [postData,setPostData]=useState({
        userId:"",
        title:"",
        body:""

    })


    const handleInputChange=(event)=>{
            setPostData(
                {
                    ...postData, [event.target.name]:event.target.value
                }
            )
    }

    const handleSubmit=(event)=>{
            event.preventDefault()
            axios.post("https://jsonplaceholder.typicode.com/posts",postData)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
    }

    
        return(
            <div>
                <h3>Form to send a post</h3>
                <form onSubmit={handleSubmit}>
                    <input name="userId" type="number" onChange={handleInputChange} placeholder="Enter User Id"/>
                    <input name="title" type="text" onChange={handleInputChange} placeholder="Enter title"/>
                    <input name="body" type="textarea" onChange={handleInputChange} placeholder="Enter body"/>          
                    <input type="submit" value="Post"/>
                
                </form>
            </div>
        )
    
}
    export default PostSendHooks