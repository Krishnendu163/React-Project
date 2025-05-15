import { useState, useRef } from "react";

export default function TextFroms(props) {
    const {title} = props;
    const textAreaRef = useRef(null);
    const [text, setText] = useState('Enter text here');

    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }   

    const handleLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }  

    const handleClear = () => {
        setText("")
    }   

    const copyToClipboard = () => {
        const text =document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const hanldeRemoveSpaces = () => {
       const newText = text.split(/[ ]+/)
       setText(newText.join(" "))
    };

    return (
        <section className="container-fluid mt-4">
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      <h3>{title}</h3>
                    </label>
                    <textarea
                        className="form-control"
                        id="textbox"
                        value={text}
                        rows="5"
                        onChange={handleOnchange}
                        ref={textAreaRef}
                    ></textarea>
                    <div className="btnGrp mt-3">
                        <button className="btn btn-primary" onClick={handleUpperCase}>Convert To Uppercase</button>
                        <button className="btn btn-primary ms-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                        <button className="btn btn-primary btn-danger ms-2" onClick={handleClear}>Clear text</button>
                        <button className="btn btn-primary ms-2" onClick={copyToClipboard}>Copy text</button>                        
                        <button className="btn btn-primary ms-2" onClick={hanldeRemoveSpaces}>Remove Extra Spaces</button>                        
                    </div>
                    <div className="text-summary mt-3">
                        <h5>Your text summary</h5>
                        <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                        <h5>Preview</h5>
                        <p>{text.length > 0 ? text : "Enter Something in the TextBox"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
