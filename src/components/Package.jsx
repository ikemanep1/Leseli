import React from "react";
import PropTypes from 'prop-types';

function Package(props){
  const packageSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: "#3366ff",
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #4da6ff',
    color: '#fdfdff'
  }
  return (
    <div style={packageSingular}>
      <h3>{props.name} - ${props.price}</h3>
      <p>{props.description}</p>
    </div>
  )
}

Package.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired
}

export default Package;
