import React, {useState} from 'react';
import propTypes from 'prop-types';


export default function Text(props) {
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleClearClick = ()=>{
    setText("");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  const countWords = (str)=>{
    let firstCount;
    if(str.charAt(str.length-1) === ' ' || str.charAt(str.length-1) === ''){
      firstCount = str.split(" ").length - 1;
    }
    else{
      firstCount = str.split(" ").length;
    }
    return firstCount;
  }
  return (
        <>
          <div className="my-3">
              <h1>{props.heading}</h1>
              <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
          </div>
          <button className = "btn btn-primary mx-1" onClick={handleUpClick}>convert to upper Case</button>
          <button className = "btn btn-primary mx-1" onClick={handleLowClick}>convert to upper Case</button>
          <button className = "btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
          <div className="contaier my-3">
              <h2>Text Summary: </h2>
              <p>your text has <b>{countWords(text)}</b> words and <b>{text.length}</b> characters</p>
              <p>your text will take <b>{countWords(text) === 0?0:0.008*countWords(text)}</b> minutes to read</p>
              <h2>Preview</h2>
              <p>{text===''?"enter some text to get a preview":text}</p>
          </div>
        </>
  )
}

Text.propTypes = {
    heading: propTypes.string
}

