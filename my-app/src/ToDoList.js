import React from 'react';
import TaskObject from './TaskObject';
import NewReminderButton from './NewReminderButton';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
        this.onTaskButtonCheck = this.onTaskButtonCheck.bind(this);
        this.state = {tasks: []};
      }
      onTaskButtonCheck(taskDetails) {
        const newTasks = this.state.tasks.filter((task) => task !== taskDetails);
        this.setState({tasks: newTasks});
      }
      onButtonSubmit(newTask) {
          console.log(newTask);
          var joined = this.state.tasks.concat(newTask);
          this.setState({ tasks: joined });
      }
    render() {
        return <div> <h1> Reminders </h1> 
        {this.state.tasks.map((task) => (
            <TaskObject key = {task} onTaskButtonCheck = {this.onTaskButtonCheck} taskDetails = {task}> </TaskObject>
        ))} 
        <NewReminderButton onButtonSubmit = {this.onButtonSubmit}> </NewReminderButton> </div>;
    }
}

export default ToDoList;