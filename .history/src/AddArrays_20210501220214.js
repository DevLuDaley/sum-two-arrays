// )
// ! [x]create inputs to accept array1 and array2
// ! []accept an input && confirm or convert it to an array



function addArrays(arr1, arr2) {
    if(arr1 == [] && arr2 == []){
        return []
    }
    //! create an array with filtered-out NANs
    //! map over the !NANs && convert them to numbers
    
    //! confirm input data types
    // console.log(typeof(arr1)); //string
    // console.log(typeof(arr2)); //string
    
    //+ remove commas &&|| NANs
    //debugger
    //! convert input(string) into an array
    let spreadArr1 = [...arr1]
    let spreadArr2 = [...arr2]

    //! confirm object is an array
    // console.log(Array.isArray(spreadArr1)); //true
    // console.log(Array.isArray(spreadArr2)); //true
    
    console.log("spreadArr1 ",spreadArr1);
    // console.log(spreadArr2);

    //! remove white space
    // let spacelessArr2 = /\S/.test(spreadArr2)
//     let spacelessArr2 = spreadArr2.filter(function(str) {
//     return /\S/.test(str);
// });
    // console.log(`🚀 ~ file: AddArrays.js ~ line 26 ~ addArrays ~ spacelessArr2`, spacelessArr2)
    // let spreadArr1 = [...arr1.replace(/^\s+|\s+$/g, '')]
    // let spreadArr2 = [...arr2.replace(/^\s+|\s+$/g, '')]
    // .split(/[a-zA-Z]/g)
    let wow = arr1.replace(/[a-zA-Z]/g)
    // let wow2 = arr2.replace(/[a-zA-Z]/g)
    // let wow2 = arr2.replace(/[a-zA-Z]/g)
    let wow2 = arr2.trim()
    console.log(`🚀 ~ file: AddArrays.js ~ line 16 ~ addArrays ~ wow`, wow)
    console.log(`🚀 ~ file: AddArrays.js ~ line 16 ~ addArrays ~ wow2`, wow2)

    //debugger
    
    let filtArr1 = spreadArr1.filter(arr => !isNaN(arr) && arr != 0).map(Number)
    let filtArr2 = spreadArr2.filter(arr => !isNaN(arr) && arr != 0).map(Number)
    //debugger
    
    console.log(`🚀 ~ file: AddArrays.js ~ line 53 ~ addArrays ~ filtArr1`, filtArr1)
    console.log(`🚀 ~ file: AddArrays.js ~ line 54 ~ addArrays ~ filtArr2`, filtArr2)
    
    let arraysConfirmed = Array.isArray(filtArr1) && Array.isArray(filtArr2)

    if (arraysConfirmed){
    // if (Array.isArray(filtArr1) && Array.isArray(filtArr2)){
    // if (arraysConfirmed && filtArr2 != []){
        
        console.log(`🚀 ~ file: AddArrays.js ~ line 62 ~ addArrays ~ filtArr2 AGAIN`, filtArr2)

        if (filtArr2 == []){
            console.log("Yooo Lu! this joint is wild empty son");
        }


            let arrOfNums1 = filtArr1.join("")
            let arrOfNums2 = filtArr2.join("")
//debugger
            let addBox = parseInt(arrOfNums1) + parseInt(arrOfNums2)
            let newString = Array.from(String(addBox), Number);
                //   return addBox
                  return newString
        }
        else{
            //debugger
                  return false
        }
}

export default addArrays