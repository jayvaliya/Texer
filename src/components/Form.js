import React, { useState } from 'react'


export default function Form(props) {
    const [text, setText] = useState('Enter text');
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [mode, setmode] = useState(false);

    const upperCase = () => {
        // Function to change text to uppercase.
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to uppercase','success');
    }

    const lowerCase = () => {
        // Function to change text to lower case.
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert('Converted to lowercase','success');
        
    }

    const clear = () => {
        // Function to change text to lower case.
        let newText = '';
        setText(newText);
        // props.showAlert('Cleard text','success');

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
        // props.showAlert('Change has been made','success');

    }
    const reset = () => {
        setText('Enter text');
        setWord1('');
        setWord2('');
        // props.showAlert('reseted','success');
    }
    
    
    return (
        <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
            <div>
                <div className="mb-3">
                    <h1 >{props.heading}</h1>
                    <textarea value={text} className={`form-control rounded text-dark`} onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={upperCase}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Convert to lowercase</button>
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
                <p>{text.split(" ").length} words and {text.split("").length} charactors.</p>
                <p>{0.008 * text.split(" ").length}Minutes of read.</p>
            </div>

            <button className="btn btn-primary my-3" onClick={reset}>Reset</button>

        </div>
    )
}