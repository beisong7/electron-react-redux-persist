import { FETCH_POSTS, NEW_POSTS } from './types'

export const fetchPosts = () => dispatch => {
    console.log('fetching posts');
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(
            posts => dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                })
            );
}

export const createPosts = postData => dispatch => {
    console.log('creating post', postData);
    fetch('http://jsonplaceholder.typicode.com/posts', 
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postData)
            }).then(res=>res.json())
            .then(
                post => dispatch({
                    type: NEW_POSTS,
                    payload: post
                })
            )
            
}