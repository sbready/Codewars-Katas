//-Math.abs(num)
function makeNegative(num) {
    return -Math.abs(num)
}

// or

function makeNegative(num) {
    if (num >= 0) {
      let neg = num * -1
      return neg
    }
    return num
}