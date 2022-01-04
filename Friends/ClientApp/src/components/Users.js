import React, { Component } from 'react';
import { CreateUser } from './CreateUser';

export class Users extends Component {
  static displayName = Users.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true, modalCreateUser: false };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.populateWeatherData();
  }
  openModal() {
    console.log("openModal");
    this.setState({ modalCreateUser: true });
  };
  closeModal() {
    console.log("closeModal");
    this.setState({ modalCreateUser: false });
  }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(users =>
            <tr key={users.userId}>
              <td>{users.userId}</td>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td><a href="#">Send Message</a> <a href="#">Edit</a> <span onClick={() => this.setState({ modalCreateUser: true })}>Create</span> <a href="#">Delete</a></td>
            </tr>
          )}
        </tbody>
      </table>

    return (
      <div>
        <h1 id="tabelLabel">Users</h1>
        {this.state.modalCreateUser && <CreateUser closeModal={this.closeModal} />}
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('/api/User');
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}
