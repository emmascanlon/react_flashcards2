import React, { Component, Fragment } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Cards from './components/Cards'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import { Container } from "semantic-ui-react"

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
    <Switch>
<Route exact path="/" component={Home} />
// <Route exact path="/flashcards" component={Cards} />
<Route component={NoMatch} />
</Switch>
</Container>
</Fragment>
    );

 

export default App;
