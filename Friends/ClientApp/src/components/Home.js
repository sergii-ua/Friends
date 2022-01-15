import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello and Welcome to the Friends network</h1>
        <p>Here @Friends you can find people and exchange message with them. Please sign up or sign in to proceed.</p>
      </div>
    );
  }
}
