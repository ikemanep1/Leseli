import React from "react";
import Project from './Project';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

let masterProjectList = [
  {
    client_name: 'Company A',
    description: 'This is the stuff we did for Company A. We did a lot of cool stuff for Company A. Later there will be an image here that you can click on and see all the stuff we did for Company A'
  },
  {
    client_name: 'Company B',
    description: 'This is the stuff we did for Company B. We did a lot of cool stuff for Company B. Later there will be an image here that you can click on and see all the stuff we did for Company B'
  },
  {
    client_name: 'Company C',
    description: 'This is the stuff we did for Company C. We did a lot of cool stuff for Company C. Later there will be an image here that you can click on and see all the stuff we did for Company C'
  },
]

function ProjectList(props){
  const itemStyles = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: "#99ccff",
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #4da6ff',
    color: '#fdfdff',
  }
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div>
      <h2 style={itemStyles}>Portfolio</h2>
    <div style={itemGrid}>
      {masterProjectList.map((project, index) =>
      <Project client_name={project.client_name}
        description={project.description} />
      )}
    </div>
    </div>
  )

}

export default ProjectList;
