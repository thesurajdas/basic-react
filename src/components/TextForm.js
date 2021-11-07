import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleCopy = () => {
        let textx = document.getElementById("myBox");
        textx.select();
        navigator.clipboard.writeText(textx.value);
    }
    const handleSpace = () => {
        let textx = text.split(/[ ]+/);
        setText(textx.join(" "));
        
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Spcaes</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words {text.length} Charecters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}