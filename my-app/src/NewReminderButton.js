import React from 'react';
import {Button} from 'react-bootstrap';

class NewReminderButton extends React.Component {
    render() {
        return <Button title = "Create a new Reminder"> + New Reminder </Button>;
    }
}

export default NewReminderButton;