import React from 'react';
import Details from './Details.js';
import TaskButton from './TaskButton';

class TaskObject extends React.Component {
    render() {
        return <div className="App"> <TaskButton /><Details details = {this.props.taskDetails} /> </div>;
    }
}

export default TaskObject;