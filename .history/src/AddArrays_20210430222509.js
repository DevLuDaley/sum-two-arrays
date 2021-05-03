// ! create inputs to accept array1 and array2 



function addArrays(array1, array2) {
    // const [message, setMessage] = useState("");
    // const [response, setResponse] = useState("");

    
//   let array1Join = Array.from(array1);
//   let array2Join = Array.from(array2);
//   let arrayToNumber1 = parseInt(array1Join);
//   let arrayToNumber2 = parseInt(array2Join);
//   let arrayToNumber1 = parseInt(array1.join(''));
//   let arrayToNumber2 = parseInt(array2.join(''));

// let combo = array1 + array2
// let combo = array1 + array2
//   let combo = arrayToNumber1 + arrayToNumber2
let dos = array2.split('')  
  let arrayToNumber1 = parseInt(dos.join(''));

let combo = Array.isArray(arrayToNumber1)
// let combo = Array.isArray(dos)
// let combo = Array.isArray(array2)

return arrayToNumber1
// return combo
// return array1
//   return arrayToNumber1 + arrayToNumber2;
//   return (array1 + array2);
}

export default addArrays