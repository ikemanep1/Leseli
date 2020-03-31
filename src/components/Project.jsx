import React from "react";
import PropTypes from 'prop-types';

function Project(props){
  const projectSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: "#3366ff",
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #4da6ff',
    color: '#fdfdff'
  }
  return (
    <div style={projectSingular}>
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
