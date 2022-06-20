const livros = require('./list-livros')
const toExchange = require('./exchange')

function insertionSort (lista) {
  for (let i = 0; i < lista.length; i++) {
    let analise = i
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      toExchange(lista, analise)

      analise--
    }
  }

  console.log(lista)
}

insertionSort(livros)