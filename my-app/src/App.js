import logo from './logo.svg';
import './App.css';
import Details from './Details.js'
import TaskButton from './TaskButton';
function App() {
  return (
    <div className="App">
        <TaskButton />
        <Details details = "test" />
    </div>
  );
}

export default App;
