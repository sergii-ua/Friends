import React, { useState, useEffect } from 'react';
import Users from './Users';

export const CreateMessage = ({ closeModal }) => {
  const [messageFromId, setSender] = useState('');
  const [messageToId, setRecepient] = useState('');
  const [messageBody, setMesageBody] = useState('');
  const [users, setUsers] = useState([]);

  const updateValueSender = (event) => {
    event.preventDefault();
    setSender(event.target[event.target.selectedIndex].id);
  }
  const updateValueRecepient = (event) => {
    event.preventDefault();
    setRecepient(event.target[event.target.selectedIndex].id);
  }
  const updateMessageBody = (e)=> {
    e.preventDefault();
    setMesageBody(e.target.value);
  }
  
  useEffect(() => {
    console.log(users);
    populateUserData()
  }, []);

  const populateUserData = async () => {
    const response = await fetch('/api/User');
    const data = await response.json();
    setUsers(()=>data);
    console.log(data);
  }

  const createMessage = (event) => {
    event.preventDefault();
    const requestBody = { messageBody, messageFromId, messageToId };
    fetch('/api/Message', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    }).then(() => {
      console.log("message is created");
      closeModal();
    })
  }

  return (
    <div className="form-create-user">
      <form onSubmit={createMessage}>
        <div className="close" onClick={closeModal}>X</div>
        <div>
        <label for="sender">From </label>
          <select name="sender" id="sender" onChange={updateValueSender}>
            {users.map(user => 
              <option value={user.firstName} id={user.userId}>{user.firstName} {user.lastName}</option>
            )}
          </select>
        </div>
        <div>
          <input type="text-area" id='messageBody' placeholder="Message" onChange={updateMessageBody} value={messageBody} />
        </div>
        <div>
        <label for="recepient">To </label>
          <select name="recepient" id="recepient" onChange={updateValueRecepient}>
            {users.map(user => 
              <option value={user.firstName} id={user.userId}>{user.firstName} {user.lastName}</option>
            )}
          </select>
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}
