import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleloClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleonChange=(event)=>{
        setText(event.target.value);
    }

    const[text,setText] = useState();
  return (
    <>
    <div className='textForm'>
        <h2>{props.heading}</h2>
        <div className="my-3">
            <textarea className='from-control' value={text} onChange={handleonChange} id="myBox" row="10" ></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn btn-primary mx-3' onClick={handleloClick}>convert to lowercase</button>
    </div>
    <div className='container my-3'>
        <h2>Text summary </h2>
        {/* <p>{text.split(" ").length} word and {text.length} characters</p> */}
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
