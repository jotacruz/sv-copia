import React, { Component, cloneElement } from 'react';
import './assets/css/styles.css';

import Menu from './commons/Menu';
import Footer from './commons/Footer';
import Index from './index/Index';
import Receitas from './receitas/Receitas';
import ReceitasDetails from './receitas/ReceitasDetails';
import Contato from './contato/Contato';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    //this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
    .then( (data) => data.json() )
    .then( (res) => this.setState({ data: res.data }) )
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" key={0} component={Index} />>
            <Route exact path="/receitas" key={1} component={Receitas} />
            <Route exact path="/contato" key={2} component={Contato} />
            <Route exact path="/receitas/:id" key={3} component={ReceitasDetails} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
