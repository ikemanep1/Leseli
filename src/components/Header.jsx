import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Header(){
  const headerStyle = {
    backgroundColor: "#99ccff",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    borderBottom: '3px solid #4da6ff',
    color: '#cc6699',
    fontSize: "20px",
    borderBottomRightRadius: '80px',
    borderBottomLeftRadius: '80px',
  }
  const navButtons = {
    display: 'flex',
    justifyContent: 'center',
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
  return (
    <div>
    <div style={headerStyle}>
    <div style={navButtons} className="nav-links">
    <BrowserRouter>
    <div>
    <Link to="/"><Button style={buttonColors}>Home</Button></Link>
    <Link to="/admin"><Button style={buttonColors}>Admin Login</Button></Link>
    <Link to="/contactform"><Button style={buttonColors}>Contact us</Button></Link>
    <Link to="/consultform"><Button style={buttonColors}>Packages</Button></Link>
    <Link to="/whatwedo"><Button style={buttonColors}>About us</Button></Link>
    </div>
    </BrowserRouter>
    </div>
    </div>
    </div>
  );
}
export default Header;