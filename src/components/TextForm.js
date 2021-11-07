import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div className="container my-3">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
