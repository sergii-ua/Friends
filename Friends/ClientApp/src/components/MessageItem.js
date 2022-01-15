import React, { useState } from 'react';


export const MessageItem = ({ id,
    senderFirstName,
    senderLastName,
    recepientFirstName,
    recepientLastName,
    messageBody,
    messageFromId,
    messageToId,
    editMessage }) => {

    const [editMessageBody, setEditMessageBody] = useState(messageBody);
    const [isEditable, setIsEditable] = useState(false);

    const saveMessage = async (e) => {
        let bearer = 'Bearer ' + localStorage.getItem('token');
        e.preventDefault();
        const requestBody = { messageBody: editMessageBody, messageFromId, messageToId };
        fetch(`https://localhost:44332/api/message/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearer,
            },
            body: JSON.stringify(requestBody)
        }).then((resp) => {
            return resp.json();
        }).then(() => {
            editMessage(id, editMessageBody, messageFromId, messageToId);
            setIsEditable(false);
        })
    }
    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{messageBody}</td>
                <td>{senderFirstName} {senderLastName}</td>
                <td>{recepientFirstName} {recepientLastName}</td>
                <td><span onClick={() => setIsEditable(prev => !prev)}>Edit</span></td>
            </tr>

            {isEditable && <tr>
                <td></td>
                <td>
                    <form onSubmit={saveMessage}>
                        <textarea name="edit-message-body" type="textarea" rows="6" cols="100" value={editMessageBody} onChange={(e) => setEditMessageBody(e.target.value)} />
                        <button>Save</button>
                    </form>
                </td>
            </tr>}
        </>
    )
}