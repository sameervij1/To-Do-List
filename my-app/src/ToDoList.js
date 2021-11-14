import React from 'react';
import TaskObject from './TaskObject';
import NewReminderButton from './NewReminderButton';

class ToDoList extends React.Component {
    render() {
        return <div> <h1> Reminders </h1> <TaskObject taskDetails = "test"></TaskObject> <NewReminderButton> </NewReminderButton> </div>;
    }
}

export default ToDoList;