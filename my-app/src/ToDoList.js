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
        return <div style = {{position: "relative"}}> <h1 style = {{position: "absolute", left: "40%", top:0}}> Todo List </h1>
        <NewReminderButton onButtonSubmit = {this.onButtonSubmit} tasksAbove = {this.state.tasks.length}> </NewReminderButton> 
        {this.state.tasks.map((task, index) => (
            <TaskObject key = {task} index = {index} onTaskButtonCheck = {this.onTaskButtonCheck} taskDetails = {task}> </TaskObject>
        ))}
        </div>;
    }
}

export default ToDoList;