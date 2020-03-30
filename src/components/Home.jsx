import React from "react";
import PackageList from './PackageList';
import ProjectList from './ProjectList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
      return (
      <div className="Home">
        <BrowserRouter>
        <Switch>
          <Route path='/packagelist' render={() =><PackageList/>}/>
          <Route path='/projectlist' render={() =><ProjectList/>}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
    }
  }

  export default Home;