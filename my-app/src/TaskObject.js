import React from 'react';
import Details from './Details.js';
import TaskButton from './TaskButton';
import DeleteButton from './DeleteButton.js';
import EditButton from './EditButton.js';
import EditForm from './EditForm.js';

class TaskObject extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonChange = this.onButtonChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.state = {isDone: false, isEdit: false, taskDetails: this.props.taskDetails};
      }
    onButtonChange(isChecked) {
        this.setState({isDone: true})
        this.props.onTaskButtonCheck(this.state.taskDetails)
    }
    onDelete() {
        this.props.onDelete(this.state.taskDetails)
    }
    onEdit() {
        this.setState({isEdit: true})
    }
    onEditSubmit(newDetails) {
        this.props.onEditSubmission(this.state.taskDetails, newDetails);
        this.setState({isEdit: false});
    }
    render() {
        const isEdit = this.state.isEdit;
        const isDone = this.state.isDone;
        let comp;
        if (isEdit) {
            comp = <EditForm onEditSubmit = {this.onEditSubmit} details = {this.state.taskDetails}/>;
        } else if (isDone){
            comp = <span><p><s>{this.state.taskDetails}</s></p></span>;
        } else {
            comp = <span><TaskButton id = {this.state.taskDetails} onButtonChange = {this.onButtonChange}/> 
            <EditButton onEdit = {this.onEdit}/><DeleteButton onDelete = {this.onDelete}/>
            <Details details = {this.state.taskDetails}/> </span>
        }
        return <div style = {{position: "absolute", left: "40%", top: this.props.index * 30 + 100}}> 
            {comp}
         </div>;
    }
}

export default TaskObject;