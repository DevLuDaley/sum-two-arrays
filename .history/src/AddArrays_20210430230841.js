// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    let arr1box = arr1.split(" ", 2)
    let newObj = Object.assign([], arr1)
    let spreadArr1 = [...arr1]
    // let filtArr1 = arr1.filter(arr => isNaN(arr))
    let filtArr1 = spreadArr1.filter(arr => !isNaN(arr)
    // .strip("")
    )
    // arr1.map(a => arr1box.push(a))
    if (Array.isArray(arr1) 
    // if (Array.isArray(arr1box) 
    // && Array.isArray(arr2)
    ){
        console.log("these are arrays Lu");
        return true
    }
    else{
        
        console.log("these are NOT arrays Lu");
        console.log("typeof(arr1)=> ",typeof(arr1));
        console.log('DISPLAY SPREAD of ARRAY1 => ', [...arr1]);
        console.log("arr1box=> ",typeof(arr1box));
        console.log(arr1box);
        console.log(typeof(newObj));
        console.log("filtArr1=> ",typeof(filtArr1));
        console.log("DISPLAY filtArr1=> ",filtArr1);
        console.log("spreadArr1=> ",typeof(spreadArr1));
        console.log("THIS IS AN ",typeof([]));
        console.log(arr1.map(Number));
        return false
    }
    // const [message, setMessage] = useState("");
    // const [response, setResponse] = useState("");

    // if(array1) {}
//   let array1Join = Array.from(array1);
//   let array2Join = Array.from(array2);
//   let arrayToNumber1 = parseInt(array1Join);
//   let arrayToNumber2 = parseInt(array2Join);
//   let arrayToNumber1 = parseInt(array1.join(''));
//   let arrayToNumber2 = parseInt(array2.join(''));

// let combo = array1 + array2
// let combo = array1 + array2
//   let combo = arrayToNumber1 + arrayToNumber2
// let dos = array2
//   let arrayToNumber1 = dos;

// let combo = Array.isArray(arrayToNumber1)
// let combo = Array.isArray(dos)
// let combo = Array.isArray(array2)

// return arrayToNumber1
// return combo
// return array1

//   return arrayToNumber1 + arrayToNumber2;
//   return (array1 + array2);
}

export default addArrays