const livros = require('./list-livros')
const lowerValue = require('./lower-value')

for (let i = 0; i < livros.length - 1; i++) {
  let menor = lowerValue(livros, i)
  let livroAtual = livros[i]

  // console.log('posição atual', i)
  // console.log('livro atual', livros[i])

  let livroLowerValue = livros[menor]

  // console.log('livro menor preço', livros[menor])

  livros[i] = livroLowerValue
  livros[menor] = livroAtual
}

console.log(livros)
