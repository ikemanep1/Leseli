import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../img/logo.png';

function Header(){
  const headerStyle = {
    backgroundColor: "#345065",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderBottom: '3px solid #4da6ff',
    color: '#cc6699',
    fontSize: "20px",
  }
  const navButtons = {
    display: 'flex',
    justifyContent: 'center',
  }
  const logoStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  }
  const buttonColors = {
    marginLeft: '30px',
    border: "3px solid #b3d9ff",
    color: "white",
    backgroundColor: "#0066cc",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  const titleStyle = {
      textAlign: "center"
  }
  return (
    <div>
    <div style={headerStyle}>
    <div style={navButtons} className="nav-links">
    <BrowserRouter>
    <div>
    <Link to="/"><Button style={buttonColors}>Home</Button></Link>
    <Link to="/contactform"><Button style={buttonColors}>Contact us</Button></Link>
    <Link to="/consultform"><Button style={buttonColors}>Packages</Button></Link>
    <Link to="/whatwedo"><Button style={buttonColors}>About us</Button></Link>
    </div>
    </BrowserRouter>
    </div>
    </div>
    <div style={logoStyles}>
    <img src={logo} alt="Logo" />
    </div>
    </div>
  );
}
export default Header;