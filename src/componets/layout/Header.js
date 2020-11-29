import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle} >
            <h1 style={hstyle}>Todo List</h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>

        </header>
    )
}

const headerStyle ={
    background:'#333',
    textAlign:'center',
    padding:'10px'
}
const hstyle={
    color:'white'
}
const LinkStyle={
    color:'white',
    textAlign:'center',
    backgroundColor:'#333'
}

export default Header
