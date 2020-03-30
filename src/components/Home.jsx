import React from "react";
import PackageList from './PackageList';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function Home(){
  return (
    <div>
      <p>this is the Home page</p>
      <PackageList/>
      <ProjectList/>

    </div>
  )

}

export default Home;
