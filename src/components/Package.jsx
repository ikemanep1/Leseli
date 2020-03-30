import React from "react";
import PropTypes from 'prop-types';

function Package(props){
  return (
    <div>
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
