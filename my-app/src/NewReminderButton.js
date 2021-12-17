import React from 'react';


class NewReminderButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.onButtonSubmit(this.state.value);
        this.setState({value: ''});
      }
    render() {
    return <form style = {{position: "absolute", left: "40%", top: 85 + this.props.tasksAbove * 25}} onSubmit={this.handleSubmit}>
        <label>
           New Reminder:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="+"/>
      </form>;
    }
}

export default NewReminderButton;