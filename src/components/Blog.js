import React, {Component} from "react";
import axios from "axios";

class Blog extends Component{
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts:res.data.slice(0,10)
            })
        })
    }

    render(){
        const {posts} = this.state;
        const postList = posts.length?(
            posts.map(post=>{
                return(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ):(<div>Pas encore de Post</div>);
        return(
            <div className="text-left container">
                <h3>Blog Post</h3>
                {postList}
            </div>
        )
    }
}

export default Blog;