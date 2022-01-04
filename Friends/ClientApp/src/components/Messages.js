import React, { Component } from 'react';

export class Messages extends Component {
  static displayName = Messages.name;

  constructor(props) {
    super(props);
    this.state = { messages: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(messages) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Message ID</th>
            <th>Message</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(messages =>
            <tr key={messages.messageid}>
              <td>{messages.messageId}</td>
              <td>{messages.messageBody}</td>
              <td>{messages.sender.firstName} {messages.sender.lastName}</td>
              <td>{messages.recepient.firstName} {messages.recepient.lastName}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Messages.renderForecastsTable(this.state.messages);

    return (
      <div>
        <h1 id="tabelLabel">Messages</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('/api/Message');
    const data = await response.json();
    this.setState({ messages: data, loading: false });
  }
}
