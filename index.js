const http = require('http')
const fs = require('fs')
const porta = 443


const servidor = http.createServer((req, res) => {
  fs.appendFile('texte.txt', 'Frase Criada por mim Luiz carlos com a ferramenta appendFille txt', (err) => {
    if(err) throw err
    console.log('Arquivo criado deu bonzãooo !')
    res.end()
  })
})

servidor.listen(porta, () => { console.log('servidor rodando') })