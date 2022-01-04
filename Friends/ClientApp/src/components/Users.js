import React, { Component } from 'react';

export class Users extends Component {
  static displayName = Users.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(users) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(users =>
            <tr key={users.userId}>
              <td>{users.userId}</td>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td><a href="#">Edit</a> <a href="#">Create</a> <a href="#">Delete</a></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Users.renderForecastsTable(this.state.messages);

    return (
      <div>
        <h1 id="tabelLabel">Users</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('/api/User');
    const data = await response.json();
    this.setState({ messages: data, loading: false });
  }
}
