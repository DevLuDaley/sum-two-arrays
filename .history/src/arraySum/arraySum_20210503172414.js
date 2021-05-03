function ArraySum(arr) {
    // let greatest = 0;
    // let sum = 0;
    let check = false;
    // arr.forEach(number => {
    //     sum = sum + number;
    //     if(number > greatest) {
    //         greatest = number;
    //     }
    //     if(greatest === sum - greatest) {
    //         check = true;
    //     }
    // });
    return check;
}

console.log(ArraySum([1, 2, 4, 6, 13])); // true
console.log(ArraySum([1, 2, 4, 34, 22])); // false