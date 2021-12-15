import React from 'react';
import TaskObject from './TaskObject';
import NewReminderButton from './NewReminderButton';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
        this.state = {tasks: []};
      }
      onButtonSubmit(newTask) {
          console.log(newTask)
          var joined = this.state.tasks.concat(newTask);
          this.setState({ tasks: joined })
      }
    render() {
        return <div> <h1> Reminders </h1> {this.state.tasks.map((task, index) => (
            <TaskObject key = {index} taskDetails = {task}> </TaskObject>
        ))} <NewReminderButton onButtonSubmit = {this.onButtonSubmit}> </NewReminderButton> </div>;
    }
}

export default ToDoList;