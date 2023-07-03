import './App.css';
import {useState} from 'react';
import {connect, sendMsg} from './api';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';

function send() {
    sendMsg('HeLLo');
}

function App() {
    const [chatHistory, setChatHistory] = useState([]);

    connect(msg => {
        console.log('New Message');
        setChatHistory([
            ...chatHistory, msg
        ]);
        console.log(chatHistory)
    });

    return (
        <div className="App">
            <Header/>
            <ChatHistory chatHistory={chatHistory}/>
            <button onClick={send}>Hit</button>
        </div>
    );
}

export default App;
