import React, { Component, useDebugValue } from 'react'
import logo from './logo.svg';
import './css/list.css'

class Logo extends Component {
    state = { 
        shouldRotate: true
     } 
    render() { 
        return (
            <img src={logo} className={this.getLogoClass()} onClick={() => this.handleLogoClick()} style={{"pointerEvents": "all"}} alt=""/>
        );
    }

    getLogoClass(){
        return this.state.shouldRotate ? "TitleBar-logo" : "TitleBar-logoStatic";
    }

    switchRotationOnOff(){
        const currentShouldRotate = this.state.shouldRotate;
        console.log("current should rotate:" + currentShouldRotate)
        this.setState({shouldRotate: !currentShouldRotate})
    }

    handleLogoClick(){
        const currentShouldRotate = this.state.shouldRotate;
        console.log("current should rotate:" + currentShouldRotate)
        this.setState({shouldRotate: !currentShouldRotate})
    }
}
 
export default Logo;