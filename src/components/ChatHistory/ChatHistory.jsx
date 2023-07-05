import React from "react";
import "./ChatHistory.scss";
import Message from '../Message';

export default function ChatHistory(props) {
    console.log(props.chatHistory);
    // const messages = props.chatHistory.map((msg, index) => (
    //    <p key={index}>{msg.data}</p>
    // ));

    const messages = props.chatHistory.map(msg => <Message message={msg.data} />);

    return (
        <div className="chatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    )
}
