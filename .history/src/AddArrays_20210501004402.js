// )
// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    //! convert string into an array
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers
    
    let spreadArr1 = [...arr1]
    let spreadArr2 = [...arr2]
    // .split(/[a-zA-Z]/g)
    let wow = spreadArr1.split(/[a-zA-Z]/g)
    console.log(`🚀 ~ file: AddArrays.js ~ line 16 ~ addArrays ~ wow`, wow)
    let filtArr1 = spreadArr1.filter(arr => !isNaN(arr)).map(Number)
    let filtArr2 = spreadArr2.filter(arr => !isNaN(arr)).map(Number)

        if (Array.isArray(filtArr1) && Array.isArray(filtArr2)){
        
            let arrOfNums1 = filtArr1.join("")
            let arrOfNums2 = filtArr2.join("")

            let addBox = parseInt(arrOfNums1) + parseInt(arrOfNums2)
            let newString = Array.from(String(addBox), Number);
                //   return addBox
                  return newString
        }
        else{
                  return false
        }
}

export default addArrays