import React , {Component} from "react"
import axios from "axios"

class PostsGet extends Component{

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response.data)
            this.setState({
                posts:response.data
            })
        })
    }

    render(){
        return(
            <div>
                <h3>Here are the posts:</h3>
                <br></br>
                <div>
                    {this.state.posts.map(post=>
                    <div key={post.id}>
                        {post.id} {post.title}
                        </div>
                        )}
                </div>
            </div>
        )
    }
}

export default PostsGet