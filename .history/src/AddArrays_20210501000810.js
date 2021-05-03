// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    //! convert string into an array
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers
    
    let spreadArr1 = [...arr1].filter(arr => !isNaN(arr)).map(Number)
    let spreadArr2 = [...arr2].filter(arr => !isNaN(arr)).map(Number)
    
    let arrOfNums1 = spreadArr1.join("")
    
    let arrOfNums2 = spreadArr2.join("")
    
    if (Array.isArray(spreadArr1) 
    && Array.isArray(spreadArr2)
    ){
        let addBox = parseInt(arrOfNums1) + parseInt(arrOfNums2)
        let newString = String(addBox).match(/-?\d/g).map(Number)
                //   return newString
                  return addBox
        }
        else{
                  return false
        }
}

export default addArrays