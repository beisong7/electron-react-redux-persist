import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { createPosts } from '../actions/postActions'



class Postform extends Component {

    state = {
        title: '',
        body: ''
    }
   

    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit =(e)=>{
        e.preventDefault();

        this.props.createPosts(this.state)
    
    }

   
    render() {
        
        return (
            <div>
                <h1>Add Post</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' placeholder='title' className='form-control' value={this.props.title} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Body</label>
                        <input type="text" name='body' placeholder='body' className='form-control' value={this.props.body} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-outline-primary" type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}


export default connect(null, { createPosts })(Postform);
