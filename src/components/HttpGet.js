import React, { Component } from 'react'
import axios from 'axios' 
//  we use axios library for achive http requests

class HttpGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    
    // the best place to ours get request is in the componentDidMount method
    componentDidMount(){
        axios.get('urlstring')
        .then(res=> {
            console.log(res)
            this.setState({posts: res.data})
        })
        .catch(error=> {
            console.log(error)
        })

    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                list of posts:
                {/* for at display a list we use a map method: */}

                {
                    //  if posts.length execit:
                    posts.length ?
                    posts.map(post=><div key={post.id}>{post.title}</div>) : null
                    // null: if the post is empty , dont have to return sth.
                }
            </div>
        )
    }
}

export default HttpGet
