const livros = require('./list-livros')
const lowerValue = require('./lower-value')

for (let i = 0; i < livros.length - 1; i++) {
  let menor = lowerValue(livros, i)
  let livroAtual = livros[i]
  let livroLowerValue = livros[menor]

  livros[i] = livroLowerValue
  livros[menor] = livroAtual
}

console.log(livros)
