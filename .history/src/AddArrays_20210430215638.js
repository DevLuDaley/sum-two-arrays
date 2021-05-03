// import React, { Component } from 'react';
// import React, { useState } from 'react';

function AddArrays(array1, array2) {
    // const [message, setMessage] = useState("");
    // const [response, setResponse] = useState("");

    
  let arrayToNumber1 = parseInt(array1.join(''));
  let arrayToNumber2 = parseInt(array2.join(''));
  return arrayToNumber1 + arrayToNumber2;
}

export default AddArrays