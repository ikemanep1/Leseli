import React from "react";
import PropTypes from 'prop-types';

function Project(props){
  return (
    <div>
      <h3>{props.client_name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

Project.propTypes = {
  client_name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Project;
