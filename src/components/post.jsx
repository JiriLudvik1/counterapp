import React, { Component } from 'react';
import "./css/list.css"

class Post extends Component {
    state = { 
        text: this.props.text,
        id: this.props.id
     } 
    render() { 
        return (
                <span className='badge m-2 badge-primary text-center'>{this.state.id}: {this.state.text}</span>
        );
    }
}

 
export default Post;