//ES6
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min(...args)
      return min
    }
}


// or


//ES5
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min.apply(null, args)
      return min
    }
  }