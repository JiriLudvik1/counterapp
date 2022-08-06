import React, { Component } from 'react'
import Post from './post';
import InputField from './inputField';
import './css/list.css'
import TitleBarFC from './titleBarFC';
import ButtonLoad from './apiCall';
import GuessAge from './guessAge';

class List extends Component {
    state = { 
        posts: [ {id:0, text: "testtext"}]
     }

    render() { 
        return (
            <div className='List-header'>
                <TitleBarFC title="nový title"/>
                <GuessAge/>
                <InputField onAdd={this.handleAdd} onDelete={this.handleDelete}/>
                <div className='List-postsDiv'>
                {this.state.posts.map(post =>
                    <Post text={post.text} key={post.id} id={post.id}/>)}
                </div>
            </div>
        );
    }

    handleAdd = (postText) => {
        const newPost = {id:this.getNextIndex(), text:postText}

        let posts = this.state.posts.concat(newPost);
        this.setState({posts})
    }

    handleDelete = (postId) => {
        const newListLength = this.getNextIndex() - 1;

        if (newListLength === -1){
            window.alert("No posts left to delete!")
            return;
        }
        const newPosts = this.state.posts.splice(0, newListLength);
        this.setState({posts: newPosts});
    }

    getNextIndex(){
        return this.state.posts.length;
    }

}
 
export default List;