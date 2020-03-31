import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Admin from './components/Admin';
import ContactForm from './components/ContactForm';
import ConsultForm from './components/ContactForm';
import AddPackage from './components/AddPackage';
import AddProject from './components/AddProject';
import WhatWeDo from './components/WhatWeDo';
import RequestForm from './components/RequestForm';
import Error404 from './components/Error404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =><Home/>}/>
          <Route path='/admin' render={() =><Admin/>}/>
          <Route path='/contactform' render={() =><ContactForm/>}/>
          <Route path='/consultform' render={() =><ConsultForm/>}/>
          <Route path='/whatwedo' render={() =><WhatWeDo/>}/>
          <Route path='/requestform' render={() =><RequestForm/>}/>
          <Route path='/addpackage' render={() =><AddPackage/>}/>
          <Route path='/addproject' render={() =><AddProject/>}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
  }
}

export default App;
