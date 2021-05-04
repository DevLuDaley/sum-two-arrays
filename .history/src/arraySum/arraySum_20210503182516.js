// does the sum of (all but last element) in array == the last element?
// identify last number \\ largest number
function ArraySum(arr) {
    let check = false;
    let total = 0;
    let largestNum;
    let i;
        for (i = 0; i < arr.length(); i++) {
            total = total + i;
            if(i > largestNum){
                largestNum = i;
            }
            if (largestNum == total - largestNum ){
                check = true;
            }
        }

    return check;
}

console.log(ArraySum([1, 2, 4, 6, 13])); // true
console.log(ArraySum([1, 2, 4, 34, 22])); // false