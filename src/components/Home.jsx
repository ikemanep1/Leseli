import React from "react";
import PackageList from './PackageList';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function Home(){
  const welcome = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: "#3366ff",
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #4da6ff',
    color: '#fdfdff'
  }
  return (
    <div>
      <div style={welcome}>
      <h1>Welcome</h1>
      <p>We create custom content and marketing plans to help your business shine brightly. Leseli promises to encourage equity with all of our clients whom we consider our partners. We understand, as a collective, the importance of working together to bring forward a better and brighter future. We all have stories to tell. Let Leseli help you share yours.</p>
      </div>
      <PackageList/>
      <br/>
      <ProjectList/>

    </div>
  )
  }
export default Home;

