function arraySum (arr) {
    let i
    var ans = []
    for(i = 1;  i < arr.length; i++){
        ans.push(arr[i] + arr[i+1]) }
    // return ans
    // console.log(`🚀 ~ file: arraySum.js ~ line 9 ~ arraySum ~ arr`, arr)
        console.log(`🚀 ~ file: arraySum.js ~ line 9 ~ arraySum ~ ans`, ans)
    // return arr 
}
        // arraySum(1,2)
        console.log(`🚀 ~ file: arraySum.js ~ line 10 ~ arraySum(1,2)`, arraySum([1,2,3]))
        // // arraySum(3,5)
        // console.log(`🚀 ~ file: arraySum.js ~ line 12 ~ arraySum(3,5)`, arraySum([3,5]))

// export default arraySum