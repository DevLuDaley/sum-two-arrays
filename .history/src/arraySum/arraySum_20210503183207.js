// does the sum of (all but last element) in array == the last element?
// identify last number \\ largest number
function ArraySum(arr) {
    let largestNum = 0;
    let total = 0;
    let check = false;

    let num;
        for (num = 0; num < arr.length; num++) {
            // total+= num; 
            total = total + num;
            if(num > largestNum){
                largestNum = num;
            }
            if (largestNum === total - largestNum ) {
                // console.log("TRUUUU");
                check = true;
            }
        }

    return check;
}

console.log(1, "ArraySum([1, 2, 4, 6, 13])) => " ,ArraySum([1, 2, 4, 6, 13])); // true
console.log(2, "ArraySum([1, 2, 4, 134, 22]))=> ", ArraySum([1, 2, 4, 134, 22])); // false