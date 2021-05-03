// )
// ! [x]create inputs to accept array1 and array2 
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    //! convert string into an array
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers
    
    // let arr1box = arr1.split(" ", 2)
    let spreadArr1 = [...arr1]
    let spreadArr2 = [...arr2]
    let filtArr1 = spreadArr1.filter(arr => !isNaN(arr)).map(Number)
    // console.log(`🚀 ~ file: AddArrays.js ~ line 15 ~ addArrays ~ filtArr1`, filtArr1)
    let filtArr2 = spreadArr2.filter(arr => !isNaN(arr)).map(Number)
    // let arrOfNums1 = filtArr1.join("")
    // let arrOfNums2 = filtArr2.join("")

    // if (Array.isArray(spreadArr1) && Array.isArray(spreadArr2)){
        // if (Array.isArray(arrOfNums1) && Array.isArray(arrOfNums2)){
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