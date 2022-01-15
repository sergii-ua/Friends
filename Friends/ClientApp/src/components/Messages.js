import React, { useState, useEffect } from 'react';
import { MessageItem } from './MessageItem';

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

  const editMessage = (id, messageBody, messageFromId, messageToId) => {
    const message = messages.find(message => message.messageId === id);
    message.messageBody = messageBody;
    message.messageFromId = messageFromId;
    message.messageToId = messageToId;
    return setMessages([...messages]);
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
          <MessageItem id={message.messageId}
            messageBody={message.messageBody}
            senderFirstName={message.sender.firstName}
            senderLastName={message.sender.lastName}
            recepientFirstName={message.recepient.firstName}
            recepientLastName={message.recepient.lastName}
            messageFromId={message.sender.userId}
            messageToId={message.recepient.userId}
            editMessage={editMessage} />
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