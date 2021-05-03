import React, { useState } from 'react';
import addArrays from './addArrays'
import './App.css';

function MessagePage() {
const [array1, setArray1] = useState("");
const [array2, setArray2] = useState("");
const [response, setResponse] = useState("");

// setMessage(count + 1)

const handleSubmit = (e) => {
    e.preventDefault()
    // addArrays(message)
    // AddArrays('3hey5hi4home')
    setResponse(addArrays(array1,array2))
}

const handleChangeArray1 = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setArray1(e.target.value)
}
const handleChangeArray2 = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setArray2(e.target.value)
}

const handleClearArrays = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
    setArray1("")
    setArray2("")
}

const handleChangeTextArea = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
}

const handleClearTextArea = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
    setResponse("")
}

  return (
    <div className="App">
      <header className="App-header">
      
         <form onSubmit={handleSubmit} id="valid">
            <label>array1:</label>
            <input onChange={handleChangeArray1} value={array1} type="text" name="id"/>
            <br/>
            <label>array2:</label>
            <input onChange={handleChangeArray2} value={array2} type="text" name="id"/>
            <br/>
            <label>array response:</label>
            <textarea onChange={handleChangeTextArea} value={response} name="" id="" cols="17" rows="1"></textarea>
            <br/>
                <input id="sub-btn" className="submit" type="submit" value="submit arrays"></input>
                <br/>
          <button id="btn-clear" onClick={handleClearArrays}>clear arrays</button>
          <button id="btn-clear" onClick={handleClearTextArea}>clear response</button>
          {/* <button id="btn" onClick={handleSubmit}> message validator</button> */}
          </form>

      </header>
    </div>
  );
}

export default MessagePage;
