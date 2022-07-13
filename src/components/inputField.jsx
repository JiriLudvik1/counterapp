import React, { Component } from 'react'
import './css/list.css'

class InputField extends Component {
    state = { 
        postText: "",
        allowInstantDelete: false
     }
    
    render() { 
        return (
            <div>
                <input type={"text"} onChange={this.handleInput} ref={(el) => this.postText = el} onKeyDown={this.handleKeyDown} className="Input-inputField m-2"/>
                <button className='btn btn-primary m-2' onClick={() => this.handleConfirm()}>Add post!</button>
                <button className='btn btn-primary m-2' onClick={() => this.props.onDelete(this.props.id)}>Remove last post!</button>
                <input className='Input-checkbox' type={"checkbox"} onChange={this.handleCheckBoxChanged}></input>
                <label className='Input-label' >Allow instant delete (del)</label>
            </div>
        );
    }

    handleCheckBoxChanged = event => {
        this.setState({allowInstantDelete: event.target.checked})
    }

    handleKeyDown = event => {
        if (event.key === 'Enter') this.handleConfirm();
        if (event.key === 'Delete' && this.state.allowInstantDelete) this.props.onDelete(this.props.id);
    }

    handleInput = event => {
        this.setState({ postText: event.target.value })
     }

    handleConfirm(){
        const input = this.state.postText;
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