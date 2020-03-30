import React from "react";
import PropTypes from 'prop-types';

function Package(props){
  return (
    <div>
      <h2>{props.name} - ${props.price}</h2>
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
