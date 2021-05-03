function arraySum (arr) {
    let newArray = arr.sort(a,b) => {
        return a - b;
    }
    let i
    var ans = []
    for(i = 0;  i < arr.length; i++){
        let num = parseInt(i)
        ans.push(num + [i + 1]) 
    }
    // return ans
    // console.log(`🚀 ~ file: arraySum.js ~ line 9 ~ arraySum ~ arr`, arr)
        console.log(`🚀 ~ file: arraySum.js ~ line 9 ~ arraySum ~ ans`, ans)
    // return arr
}
        console.log(`🚀 ~ file: arraySum.js ~ line 10 ~ arraySum(1,2)`, arraySum([1,2,3,4]))
        // console.log(`🚀 ~ file: arraySum.js ~ line 12 ~ arraySum(3,5)`, arraySum([3,5]))

// export default arraySum