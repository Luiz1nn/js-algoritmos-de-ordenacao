function lowerValue (arrayLivros, positionInitial) {
  let maisBarato = positionInitial

  for (let i = positionInitial; i < arrayLivros.length; i++) {
    if (arrayLivros[i].preco < arrayLivros[maisBarato].preco) {
      maisBarato = i
    }
  }

  return maisBarato
}

module.exports = lowerValue
