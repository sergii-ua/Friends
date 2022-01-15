import React, { useState } from 'react';


export const UserItem = ({ firstName, lastName, id, editUser, openModalSendMessage, openModal, deleteUser }) => {

    const [editFirstName, setEditFirstName] = useState(firstName);
    const [editLastName, setEditLastName] = useState(lastName);
    const [isEditable, setIsEditable] = useState(false);

    const saveUser = (e) => {
        e.preventDefault();
        const requestBody = { firstName: editFirstName, lastName: editLastName };
        fetch(`/api/user/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then((resp) => {
            return resp.json();
            //editUser(id);
        }).then((data) => {
            console.log(data);
            editUser(id, editFirstName, editLastName);
            setIsEditable(false);
        })
    }
    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td><span onClick={openModalSendMessage}>Send Message </span> <span onClick={() => setIsEditable(prev => !prev)}>Edit </span>
                    <span onClick={openModal}>Create </span>
                    <span onClick={() => deleteUser(id)}>Delete</span></td>
            </tr>

            {isEditable && <tr>
                <td>
                    <form onSubmit={saveUser}>
                        <input name="edit-first-name" type="text" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
                        <input name="edit-last-name" type="text" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
                        <button>Save</button>
                    </form>
                </td>
            </tr>}
        </>
    )
}