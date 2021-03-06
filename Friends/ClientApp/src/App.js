import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Messages  from './components/Messages'
import Users  from './components/Users'
import {SignIn}  from './components/SignIn'
import SignUp  from './components/SignUp'

import './custom.css'

const App=()=> {
      return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/messages' component={Messages} />
        <Route path='/users' component={Users} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Layout>
    );
}
export default App;