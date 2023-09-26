import React, { useState } from 'react'


const Form = (props) => {
    const [text, setText] = useState('');
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [mode, setmode] = useState(false);

    const upperCase = () => {
        // Function to change text to uppercase.
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerCase = () => {
        // Function to change text to lower case.
        let newText = text.toLowerCase();
        setText(newText);

    }

    const clear = () => {
        // Function to change text to lower case.
        let newText = '';
        setText(newText);
    }

    const handleChange = (event) => {
        // Function to change the state.
        setText(event.target.value);
    }

    const handleChange1 = (event) => {
        // Function to change the state.
        setWord1(event.target.value);
    }

    const handleChange2 = (event) => {
        // Function to change the state.
        setWord2(event.target.value);
    }
    const replace = () => {
        console.log(text);
        let newText = text.split(word1).join(word2);
        setText(newText);
    }

    const reset = () => {
        setText('');
        setWord1('');
        setWord2('');
    }

    const copyToClipboard = () => {
        // Create a temporary textarea element
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = text;

        // Append the temporary textarea to the DOM
        document.body.appendChild(tempTextarea);

        // Select the text in the temporary textarea
        tempTextarea.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the temporary textarea from the DOM
        document.body.removeChild(tempTextarea);

        // Show a message or perform any desired action after copying
        alert('Text copied to clipboard');
    }

    return (
        <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <div>
                <div className="mb-3">
                    <h1 >{props.heading}</h1>
                    <textarea value={text} id="txt" className={`form-control rounded text-dark`} placeholder="Enter text" onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={upperCase}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>Copy text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear text</button>


            <div className='my-3'>
                Replace:
                <input
                    className='rounded mx-2 my-2'
                    type="text"
                    id="word1"
                    name="word1"
                    onChange={handleChange1}
                    value={word1}
                />
                <span className="my-5">with</span>
                <input
                    className='rounded mx-2 my-2'
                    type="text"
                    id="word2"
                    name="word1"
                    onChange={handleChange2}
                    value={word2}
                />
                <button className="btn btn-primary mx-2 my-2" onClick={replace}>Replace</button>
            </div>


            <div className="mb-3">
                <h1>Text summary:</h1>
                <p>{`${text === '' ? '0' : text.split(" ").length - 1} words and ${text === '' ? '0' : text.split("").length} charactors.`}</p>
                <p>{0.008 * text.split(" ").length}Minutes of read.</p>
            </div>

            <button className="btn btn-primary my-3" onClick={reset}>Reset</button>

        </div>
    )
}

export default Form