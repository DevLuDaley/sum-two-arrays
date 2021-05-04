// does the sum of (all but last element) in array == the last element?
// identify last number \\ largest number
function ArraySum(arr) {
    // ! construct/declare necessary variables
    let largestNum = 0;
    let total = 0;
    let check = false;

    let num;
    // ! iterate over the array adding each number to the total container
        // for (num = 0; num < arr.length; num++) {
        arr.forEach(num => {
            // total+= num; 
            total = total + num;
    // ! assign the highest num the 'largest' label
            if(num > largestNum){
                largestNum = num;
                // console.log(`🚀 ~ file: arraySum.js ~ line 14 ~ ArraySum ~ largestNum`, largestNum)
            }
            
            if (largestNum === total - largestNum ) {
                // console.log("TRUUUU");
                check = true;
            }
            // console.log(`🚀 ~ file: arraySum.js ~ line 17 ~ ArraySum ~ total - largestNum`, total - largestNum)
            // console.log(`🚀 ~ file: arraySum.js ~ line 17 ~ ArraySum ~ total`, total)
            // console.log(`🚀 ~ file: arraySum.js ~ line 17 ~ ArraySum ~ largestNum`, largestNum)
        })

    return check;
}

console.log(1, "ArraySum([1, 2, 4, 6, 13])) => " ,ArraySum([1, 2, 4, 6, 13])); // true
console.log(1, "ArraySum([10, 5, 20, 15, 50])) => " ,ArraySum([10, 5, 20, 15, 50])); // true
console.log(2, "ArraySum([1, 2, 4, 134, 22]))=> ", ArraySum([1, 2, 4, 134, 22])); // false
console.log(2, "ArraySum([1, 2, 4, 15, 22]))=> ", ArraySum([1, 2, 4, 22, 15])); // true
console.log(2, "ArraySum([1, 2, 4, 15, 22]))=> ", ArraySum([12, 2, 4, 22, 15])); // true