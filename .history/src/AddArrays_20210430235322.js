// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    //! convert string into an array
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers

    // let arr1box = arr1.split(" ", 2)
    let spreadArr1 = [...arr1].filter(arr => !isNaN(arr)).map(Number)
    let spreadArr2 = [...arr2].filter(arr => !isNaN(arr)).map(Number)
    // let filtArr1 = spreadArr1.filter(arr => !isNaN(arr))
    // let arrOfNums1 = filtArr1.map(Number)
    // let arrOfNums1 = spreadArr1.map(Number)
    // let arrOfNums1 = spreadArr1.join("")
    let arrOfNums1 = parseInt(spreadArr1)
    // let arrOfNums2 = spreadArr2.join("")
    let arrOfNums2 = parseInt(spreadArr2)

    // arr1.map(a => arr1box.push(a))
    // if (Array.isArray(arrOfNums1) 
    if (Array.isArray(spreadArr1) 
    && Array.isArray(spreadArr2)
    ){
        console.log("these are arrays Lu");
        console.log(arrOfNums1)
        console.log(arrOfNums2)
        
        let addBox = parseInt(arrOfNums1) + parseInt(arrOfNums2)
        console.log(arrOfNums1.length)
        let newArray = []

        let i;
        for(i=0; i < arrOfNums1.length && i < arrOfNums2.length; i++) {
            newArray.push(addBox[i])
        }
        // newArray.push(addBox)
            // return typeof(addBox)
            return newArray
        }
        else{
            
            console.log("these are NOT arrays Lu");
            // console.log("typeof(arr1)=> ",typeof(arr1));
            // console.log('DISPLAY SPREAD of ARRAY1 => ', [...arr1]);
            // console.log("arr1box=> ",typeof(arr1box));
            // console.log(arr1box);
            // console.log(typeof(newObj));
            // console.log("filtArr1=> ",typeof(filtArr1));
            // console.log("DISPLAY filtArr1=> ",filtArr1);
            // console.log("spreadArr1=> ",typeof(spreadArr1));
            // console.log("THIS IS AN ",typeof([]));
            // console.log(filtArr1.map(Number));
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