import './App.css';
import TaskObject from './TaskObject';
import NewReminderButton from './NewReminderButton';
function App() {
  return (
    <div className="App">
        <h1> Reminders </h1>
        <TaskObject taskDetails = "test"></TaskObject>
        <NewReminderButton> </NewReminderButton>
    </div>
  );
}

export default App;
