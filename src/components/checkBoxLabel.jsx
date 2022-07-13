import React, { Component } from 'react'

class CheckBoxWithLabel extends Component {
    state = { 
        checkBoxState: false
     } 
    render() { 
        return (
            <div>
                <input className='Input-checkbox' type={"checkbox"} onChange={this.handleCheckBoxChanged} defaultChecked={this.state.checkBoxState}></input>
                <label className='Input-label'>{this.props.labelText}</label>
            </div>
        );
    }

    handleCheckBoxChanged = event => {
        const newCheckboxState = event.target.checked;
        this.setState({checkBoxState: newCheckboxState});
        this.props.onChange(this.props.functionName, newCheckboxState);
    }
}
 
export default CheckBoxWithLabel;