import React from "react";
import {Button} from 'react-bootstrap';

function Footer(){
  const footerStyle = {
    backgroundColor: "#99ccff",
    borderTop: '3px solid #4da6ff',
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    fontSize: "20px",
    marginTop: '100%',
    marginBottom: '0%',
    height: '20%',
    position: 'relative',
    borderTopRightRadius: '80px',
    borderTopLeftRadius: '80px',
  }
  const buttonColors = {
    border: "3px solid #b3d9ff",
    color: "white",
    backgroundColor: "#0066cc",
    marginLeft: '10px',
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={footerStyle}>
    <a href="facebook.com" ><Button style={buttonColors}>Facebook</Button></a>
    <a href="twitter.com" ><Button style={buttonColors}>Twitter</Button></a>
    <a href="instagram.com" ><Button style={buttonColors}>Instagram</Button></a>
    </div>
  );
}

export default Footer;
