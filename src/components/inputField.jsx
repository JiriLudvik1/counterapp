import React, { Component } from 'react'
import './css/list.css'
import CheckBoxWithLabel from './checkBoxLabel';

class InputField extends Component {
    state = { 
        postText: "",
        allowInstantDelete: false,
        allowInstantEnter: false,
        checkBoxes: [
            {labelText: "Allow instant delete (del)", functionName: "delete"},
            {labelText: "Allow instant enter (ent)", functionName: "enter"}
        ]
     }
    
    render() { 
        return (
            <div className='Input-divStyle'>
                <input type={"text"} onChange={this.handleInput} ref={(el) => this.postText = el} onKeyDown={this.handleKeyDown} className="Input-inputField m-2"/>
                <button className='btn btn-primary m-2' onClick={() => this.handleConfirm()}>Add post!</button>
                <button className='btn btn-primary m-2' onClick={() => this.props.onDelete(this.props.id)}>Remove last post!</button>

                <div>
                    {this.state.checkBoxes.map(checkbox =>
                    <CheckBoxWithLabel key={checkbox.functionName} labelText = {checkbox.labelText} functionName = {checkbox.functionName} onChange = {this.handleCheckBoxChanged}/>)}
                </div>
            </div>
        );
    }

    handleCheckBoxChanged = (functionName, state) => {
        if (functionName === 'delete') this.setState({allowInstantDelete: state})
        if (functionName === 'enter') this.setState({allowInstantEnter: state})
    }

    handleKeyDown = event => {
        if (event.key === 'Enter' && this.state.allowInstantEnter) this.handleConfirm();
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