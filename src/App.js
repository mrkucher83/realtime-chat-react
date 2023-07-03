import './App.css';
import { connect, sendMsg } from './api';

function send() {
  sendMsg("HeLLo");
}

function App() {
  connect();

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
