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
  return (
    <div>
      <h2>Portfolio</h2>
      {masterProjectList.map((project, index) =>
      <Project client_name={project.client_name}
        description={project.description} />
      )}
    </div>
  )

}

export default ProjectList;
