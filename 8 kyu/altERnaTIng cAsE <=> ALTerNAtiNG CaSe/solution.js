String.prototype.toAlternatingCase = function () {
    let answer = ''
    for(let i = 0; i < this.length; i++){
      if (this[i].toLowerCase() === this[i]){
        answer = answer + this[i].toUpperCase();
      } else if (this[i].toUpperCase() === this[i]){
        answer = answer + this[i].toLowerCase();
      } else {
        answer = answer + this[i]
      }
    }
    return answer
}