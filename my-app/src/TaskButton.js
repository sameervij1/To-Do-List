import React, { useState } from 'react';
const buttonStyle = {
    display: 'inline-block'
}

function TaskButton(props) {
    const [isChecked, setCheck] = useState(false);
    const handleChange = () => { 
        setCheck(!isChecked);
        props.onButtonChange(isChecked);
      }; 
    return <input style = {buttonStyle} onChange={handleChange} type = "checkbox"></input>;
}

export default TaskButton;