import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'



class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts()

        console.log('check state in post component', this.props.newPost)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }

    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div className="card mb-5" key={post.id}>
            <div className="card-header">
                <h3>{post.title}</h3>
            </div>          
                <div className="card-body">
                    <p>{post.body}</p>
                </div>
            </div>
        ))

        return (
            <div>
                <h1>Posts</h1>

                { postItems}
            </div>
        );
    }
}

// Posts.PropTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired
// }

const mapStateToProp = state =>({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProp, { fetchPosts })(Posts);
