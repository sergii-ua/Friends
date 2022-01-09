import React, { useState } from 'react';

export const CreateUser = ({closeModal, populateUserData}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const updateInputFirst = (event) => {   
    setFirstName(event.target.value);
  }
  const updateInputLast = (event) => {
    setLastName(event.target.value);
  }
  const createUser = (event) => {
    event.preventDefault();
    const userObj = { firstName, lastName };
    fetch('https://localhost:44332/api/User', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then(() => {
      console.log("a new user is created");
      closeModal();
      populateUserData();
    })
  }
  return (
    <div className="form-create-user">
      <form onSubmit={createUser}>
        <div className="close" onClick={closeModal}>X</div>
        <div>
          <input type="text" placeholder="First Name" onChange={updateInputFirst} value={firstName} />
        </div>
        <div>
          <input type="text" placeholder="Last Name" onChange={updateInputLast} value={lastName} />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}
