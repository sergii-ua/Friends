import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Messages } from './components/Messages'
import { Users } from './components/Users'
import {SignIn } from './components/SignIn'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/messages' component={Messages} />
        <Route path='/users' component={Users} />
        <Route path='/signin' component={SignIn} />
      </Layout>
    );
  }
}
