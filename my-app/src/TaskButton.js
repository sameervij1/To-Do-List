import React, { useState } from 'react';
const buttonStyle = {
    display: 'inline-block',
    cursor: "pointer"
}

function TaskButton(props) {
    const [isChecked, setCheck] = useState(false);
    const handleChange = () => { 
        setCheck(!isChecked);
        console.log("checked")
        props.onButtonChange(isChecked);
      }; 
    return <input style = {buttonStyle} onChange={handleChange} type = "checkbox" id = {props.id}></input>;
}

export default TaskButton;