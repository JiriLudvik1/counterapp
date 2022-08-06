import React, { useState, useEffect } from 'react';
import Logo from './logo';
import './css/titleBar.css'

function TitleBarFC(props) {
    const[title, setTitle] = useState("defaultTitle")
    
    useEffect( () =>{
        setTitle(props.title);
    })
    
    return ( 
        <div className='TitleBar-div'>
        <Logo></Logo>
        <a className="navbar-brand" href='#'>{title}</a>
    </div>
     );
}

export default TitleBarFC;