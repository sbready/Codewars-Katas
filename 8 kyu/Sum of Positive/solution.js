function positiveSum(arr) {
    let newArr = []
    let total = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        newArr.push(arr[i])
      }
    }
    for(let j = 0; j < newArr.length; j++){
      total = total + newArr[j]
    }
    return total
}