import React from "react";
import "./ChatInput.scss";

export default function ChatInput(props) {
    return (
        <div className="ChatInput">
            <input type="text" onKeyDown={props.send}/>
        </div>
    )
}
