import React, { Component } from 'react'
import './css/list.css'

class InputField extends Component {
    state = { 
        postText: ""
     }

     handleInput = event => {
        this.setState({ postText: event.target.value })
     }
    
    render() { 
        return (
            <div>
                <input type={"text"} onChange={this.handleInput} ref={(el) => this.postText = el} className="Input-inputField m-2"/>
                <button className='btn btn-primary m-2' onClick={() => this.handleConfirm(this.state.postText)}>Add post!</button>
                <button className='btn btn-primary m-2' onClick={() => this.props.onDelete(this.props.id)}>Remove last post!</button>
            </div>
        );
    }

    handleConfirm(input){
        if (input === ""){
            window.alert("Entry was empty!")
            return;
        }
        this.props.onAdd(input);
        this.postText.value = '';
        this.setState({postText: ''})
    }
}
 
export default InputField;