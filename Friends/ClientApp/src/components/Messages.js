import React, { useState, useEffect } from 'react';

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