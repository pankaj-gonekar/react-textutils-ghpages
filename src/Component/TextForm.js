
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        console.log('Lowercase was clicked' + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }
 
    const handleOnChange = (event) => {
        console.log('On change')
        setText(event.target.value)
    }
    
    const [text, setText] = useState('')
    console.log(text)
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Conver to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Yout text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.trim().length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
            <p>Lines: {text.split('\n').filter((element)=>{return element.length!==0}).length }</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
