function DNAtoRNA(dna) {
    let rna = dna.split('')
    for( let i = 0; i < dna.length; i++ ) {
        if ( rna[i] === 'G' ) {
            rna[i] = 'G'
        }
        else if ( rna[i] === 'C' ) {
            rna[i] = 'C'
        }
        else if ( rna[i] === 'A' ) {
            rna[i] = 'A'
        }
        else if ( rna[i] === 'T' ) {
            rna[i] = 'U'
        }
    }
    return rna.join('')
}