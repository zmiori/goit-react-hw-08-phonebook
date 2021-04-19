import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

import NavBar from './components/NavBar';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
    </Container>
  );
}
