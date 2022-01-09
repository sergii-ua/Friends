import { CreateUser } from './CreateUser';
import React, { useEffect, useState } from "react";



const Users = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalCreateUser, setModalCreateUser] = useState(false);

  useEffect(() => {
    console.log(users);
    populateUserData()
  }, []);
  const deleteUser = (id) => {
    console.log(id);
    setUsers(users.filter(user=>user.userId !== id))
    //console.log(filter);
    fetch(`https://localhost:44332/api/user/${id}`, {
  method: 'DELETE',
  });
  }

  const openModal = () => setModalCreateUser(true);
  const closeModal = () => setModalCreateUser(false);
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
          <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td><span >Send Message</span> <a href="#">Edit</a> 
            <span onClick={openModal}>Create</span>
            <span onClick={()=>deleteUser(user.userId)}>Delete</span></td>
          </tr>
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
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

export default Users;
