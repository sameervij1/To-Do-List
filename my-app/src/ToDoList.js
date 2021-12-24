import React from 'react';
import TaskObject from './TaskObject';
import NewReminderButton from './NewReminderButton';
import ClearButton from './ClearButton';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
        this.onTaskButtonCheck = this.onTaskButtonCheck.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.clear = this.clear.bind(this);
        this.onEditSubmission = this.onEditSubmission.bind(this);
        this.state = {tasks: []};
      }
      clear() {
          this.setState({tasks: []});
      }
      onDelete(taskDetails) {  
        const newTasks = this.state.tasks.filter((task) => task !== taskDetails);
        this.setState({tasks: newTasks});
      }
      onTaskButtonCheck(taskDetails) {
          var that = this;
        setTimeout(function(){
            const newTasks = that.state.tasks.filter((task) => task !== taskDetails);
            that.setState({tasks: newTasks});
        }, 3000);  
      }
      onButtonSubmit(newTask) {
          console.log(newTask);
          var joined = this.state.tasks.concat(newTask);
          this.setState({tasks: joined });
      }
      onEditSubmission(taskDetails, newDetails) {
          var edited = Array.from(this.state.tasks);
          var index = edited.indexOf(taskDetails);
          edited[index] = newDetails;
          this.setState({tasks: edited});
      }
    render() {
        return <div style = {{position: "relative"}}> <h1 style = {{position: "absolute", left: "40%", top:0}}> To-Do List </h1>
        <NewReminderButton onButtonSubmit = {this.onButtonSubmit}> </NewReminderButton> 
        {this.state.tasks.map((task, index) => (
            <TaskObject key = {task} index = {index} onDelete = {this.onDelete} onTaskButtonCheck = {this.onTaskButtonCheck} onEditSubmission = {this.onEditSubmission} taskDetails = {task}> </TaskObject>
        ))}
        <ClearButton tasksAbove = {this.state.tasks.length} clear = {this.clear}></ClearButton>
        </div>;
    }
}

export default ToDoList;