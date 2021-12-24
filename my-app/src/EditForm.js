import React, { useState } from 'react';

function EditForm(props) {
    const [newDetails, setNewDetails] = useState(props.details);
    const onSubmit = (event) => {
        event.preventDefault();
        props.onEditSubmit(newDetails);
    };
    return <form style = {{display: "block", float: "left", marginRight: 50, padding: 2, margin: 12}}onSubmit={onSubmit}>
    <label>
      
    <input autoFocus type="text" value={newDetails} onChange={(event) => setNewDetails(event.target.value)}/>
    </label>
    <input type="submit" style = {{cursor: "pointer"}} value="Done"/>
  </form>;
}

export default EditForm;