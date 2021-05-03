function addArrays(array1, array2) {
    // const [message, setMessage] = useState("");
    // const [response, setResponse] = useState("");

    
  let array1Join = array1.join('');
  let array2Join = array2.join('');
  let arrayToNumber1 = parseInt(array1Join);
  let arrayToNumber2 = parseInt(array2.join(''));

//   let arrayToNumber1 = parseInt(array1.join(''));
//   let arrayToNumber2 = parseInt(array2.join(''));

//   return arrayToNumber1 + arrayToNumber2;
  return (array1 + array2);
}

export default addArrays