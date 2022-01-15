import { CreateUser } from './CreateUser';
import { CreateMessage } from './CreateMessage';
import React, { useEffect, useState } from "react";
import { UserItem } from './UserItem';
import { SignIn } from './SignIn';

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalCreateUser, setModalCreateUser] = useState(false);
  const [modalSendMessage, setModalSendMessage] = useState(false);

  useEffect(() => {
    console.log(users);
    populateUserData()
  }, []);
  const deleteUser = (id) => {
    console.log(id);
    setUsers(users.filter(user => user.userId !== id))
    //console.log(filter);
    fetch(`https://localhost:44332/api/user/${id}`, {
      method: 'DELETE',
    });
  }
  const editUser = (id, firstName, lastName) => {
    const user = users.find(user => user.userId === id);
    user.firstName = firstName;
    user.lastName = lastName;
    return setUsers([...users]);
  }

  const openModal = () => setModalCreateUser(true);
  const closeModal = () => {
    setModalCreateUser(false);
    setModalSendMessage(false);
  }
  const openModalSendMessage = () => setModalSendMessage(true);
  let contents = loading
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
        {users.map(user =>
          <UserItem firstName={user.firstName}
            lastName={user.lastName}
            id={user.userId}
            editUser={editUser}
            openModal={openModal}
            openModalSendMessage={openModalSendMessage}
            deleteUser={deleteUser} />
        )}
      </tbody>
    </table>


  const populateUserData = async () => {
    const response = await fetch('/api/User');
    const data = await response.json();
    setUsers(data);
    setLoading(false);

  }

  return (
    <div>
      <h1 id="tabelLabel">Users</h1>
      {modalCreateUser && <CreateUser populateUserData={populateUserData} closeModal={closeModal} />}
      {modalSendMessage && <CreateMessage openModalSendMessage={openModalSendMessage} populateUserData={populateUserData} closeModal={closeModal} />}
      <p></p>
      {contents}
    </div>
  );
}

export default Users;
