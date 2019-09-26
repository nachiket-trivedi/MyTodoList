import React, { Component } from 'react'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}><h1>Nachi's Todo List</h1>
        <Link to='/' style={linkStyle}>Home </Link> |
        <Link to='/about' style={linkStyle}> About</Link>
        </header>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
export default Header
