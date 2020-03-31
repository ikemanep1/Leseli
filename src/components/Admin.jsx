import React from "react";
import PackageList from './PackageList';
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';

function Admin(){
  return (
    <div>
      <Link to='/newpackage'>Add Package</Link>
      <PackageList/>
      <br/>
      <Link to='/newproject'>Add Project</Link>
      <ProjectList/>
    </div>
  )
}

export default Admin;
