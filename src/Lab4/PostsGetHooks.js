import React , {useEffect, useState} from "react"
import axios from "axios"

function PostsGetHooks (){

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response.data)
            setPosts(response.data)
        })
    },[])
    

        return(
            <div>
                <h3>Here are the posts:</h3>
                <br></br>
                <div>
                    {posts.map(post=>
                    <div key={post.id}>
                        {post.id} {post.title}
                        </div>
                        )}
                </div>
            </div>
        )
}

export default PostsGetHooks