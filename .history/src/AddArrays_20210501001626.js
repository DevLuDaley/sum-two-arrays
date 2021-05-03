// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    //! convert string into an array
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers
    
    // let arr1box = arr1.split(" ", 2)
    let spreadArr1 = [...arr1]
    let spreadArr2 = [...arr2]
    let filtArr1 = spreadArr1.filter(arr => !isNaN(arr))
    let filtArr2 = spreadArr2.filter(arr => !isNaN(arr))
    let arrOfNums1 = filtArr1.map(Number)
    let arrOfNums2 = filtArr2.map(Number)
    // let arrOfNums1 = spreadArr1.map(Number)
    // let arrOfNums1 = spreadArr1.join("")
    // let arrOfNums1 = parseInt(spreadArr1)
    // let arrOfNums2 = spreadArr2.join("")
    // let arrOfNums2 = parseInt(spreadArr2)

    if (Array.isArray(spreadArr1) && Array.isArray(spreadArr2)){
        let addBox = parseInt(arrOfNums1) + parseInt(arrOfNums2)
        let newString = Array.from(String(addBox), Number);
                  return newString
        }
        else{
                  return false
        }
}

export default addArrays