import React from 'react';
import Details from './Details.js';
import TaskButton from './TaskButton';

class TaskObject extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonChange = this.onButtonChange.bind(this);
      }
    onButtonChange(isChecked) {
        this.props.onTaskButtonCheck(this.props.taskDetails)
    }
    render() {
        return <div style = {{position: "absolute", left: "40%", top: this.props.index * 30 + 100}}> <TaskButton id = {this.props.taskDetails} onButtonChange = {this.onButtonChange}/><Details details = {this.props.taskDetails} /> </div>;
    }
}

export default TaskObject;