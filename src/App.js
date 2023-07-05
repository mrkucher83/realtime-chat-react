import './App.css';
import {useState} from 'react';
import {connect, sendMsg} from './api';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';

function send(event) {
    if (event.keyCode === 13) {
        sendMsg(event.target.value);
        event.target.value = '';
    }
}

function App() {
    const [chatHistory, setChatHistory] = useState([]);

    connect(msg => {
        console.log('New Message');
        setChatHistory([
            ...chatHistory, msg
        ]);
    });

    return (
        <div className="App">
            <Header/>
            <ChatHistory chatHistory={chatHistory}/>
            <ChatInput send={send} />
        </div>
    );
}

export default App;
