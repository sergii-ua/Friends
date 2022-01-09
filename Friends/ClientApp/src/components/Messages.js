// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
// export class Messages extends Component {
//   static displayName = Messages.name;

//   constructor(props) {
//     super(props);
//     this.state = { messages: [], loading: true };
//   }

//   componentDidMount() {
//     this.populateWeatherData();
//   }

//   static renderForecastsTable(messages) {
//     return (
//       <table className='table table-striped' aria-labelledby="tabelLabel">
//         <thead>
//           <tr>
//             <th>Message ID</th>
//             <th>Message</th>
//             <th>From</th>
//             <th>To</th>
//           </tr>
//         </thead>
//         <tbody>
//           {messages.map(messages =>
//             <tr key={messages.messageid}>
//               <td>{messages.messageId}</td>
//               <td>{messages.messageBody}</td>
//               <td>{messages.sender.firstName} {messages.sender.lastName}</td>
//               <td>{messages.recepient.firstName} {messages.recepient.lastName}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     );
//   }

//   render() {
//     let contents = this.state.loading
//       ? <p><em>Loading...</em></p>
//       : Messages.renderForecastsTable(this.state.messages);

//     return (
//       <div>
//         <h1 id="tabelLabel">Messages</h1>
//         <p>This component demonstrates fetching data from the server.</p>
//         {contents}
//       </div>
//     );
//   }

//   async populateWeatherData() {
//     var bearer = 'Bearer '+ localStorage.getItem('token');
//     const response = await fetch('/api/Message',
//       {
//         headers: {
//           'Authorization': bearer,
//           'Content-Type' : 'application/json'
//         }
//       });
//     const data = await response.json();
//     this.setState({ messages: data, loading: false });
//   }
// }

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(messages);
    populateMessageData()
  }, []);

  const populateMessageData = async () => {
    let bearer = 'Bearer ' + localStorage.getItem('token');
    const response = await fetch('/api/message',
      {
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
      });
    const data = await response.json();
    setMessages(data);
    setLoading(false);
  }

  let contents = loading
    ? <p><em>Loading...</em></p>
    : <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>ID</th>
          <th>Message</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(message =>
          <tr key={message.messageid}>
            <td>{message.messageId}</td>
            <td>{message.messageBody}</td>
            <td>{message.sender.firstName} {message.sender.lastName}</td>
            <td>{message.recepient.firstName} {message.recepient.lastName}</td>
          </tr>
        )}
      </tbody>
    </table>
  return (
    <div>
      <h1 id="tabelLabel">Messages</h1>
      {contents}
    </div>
  );
}
export default Messages;