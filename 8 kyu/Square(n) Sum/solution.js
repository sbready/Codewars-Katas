function squareSum(numbers){
    let square_sum = []
    let Total = 0
    for(let i = 0; i < numbers.length; i++) {
      square_sum.push( numbers[i] * numbers[i] )
    }
    for(let j = 0; j < square_sum.length; j++){
      Total = Total + square_sum[j]
    }
    return Total
  }