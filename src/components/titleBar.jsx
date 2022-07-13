import React, { Component } from 'react'
import Logo from './logo';
import './css/titleBar.css'

class TitleBar extends Component {
    state = { 
        title: this.props.title
     } 
    render() { 
        return (
            <div className='TitleBar-div'>
                <Logo></Logo>
                <a className="navbar-brand" href='#'>{this.state.title}</a>
            </div>
            
        );
    }
}
 
export default TitleBar;