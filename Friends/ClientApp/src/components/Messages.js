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
    var bearer = 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWY4MDMwNS0xM2MyLTRlOGEtN2QxMy0wOGQ5ZDA4Zjg3MTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImp0aSI6IjI2MjJkZThmLTk2NjItNDA0OC1hMWQxLWI0YWE3ZjA3YTZmNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjFmODAzMDUtMTNjMi00ZThhLTdkMTMtMDhkOWQwOGY4NzEyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJleHAiOjE2NDQxNDYyNzAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDQzMzIiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQ0MzMyIn0.ryiyhdYsc_G4cx040c4a7DwiF1g9mScULPR4qsZ7Lm0';
    const response = await fetch('/api/Message',
      {
        headers: {
          'Authorization': bearer,
          'Content-Type' : 'application/json'
        }
      });
    const data = await response.json();
    this.setState({ messages: data, loading: false });
  }
}
