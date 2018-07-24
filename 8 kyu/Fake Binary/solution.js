function fakeBin(x){
    return x.replace( /[1234]/g, '0' ).replace( /[56789]/g, '1' )
}

// or

function fakeBin(x){
    let str = ''
    for( let i = 0; i < x.length; i++){
      if ( x[i] < '5' ) str += '0'
      else if ( x[i] >= '5' ) str += '1'
    }
    return str
}