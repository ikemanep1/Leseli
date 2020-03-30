import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Admin from './components/Admin';
import RequestForm from './components/RequestForm';
import Error404 from './components/Error404';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' render={() =><Home/>}/>
        <Route path='/admin' render={() =><admin/>}/>
        <Route path='/requestform' render={() =><requestform/>}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
