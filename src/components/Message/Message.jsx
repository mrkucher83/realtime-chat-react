import React from 'react';
import "./Message.scss";

export default function Message(props) {
    const msg = JSON.parse(props.message).body;

    return (
        <div className="Message">{msg}</div>
    )
}
