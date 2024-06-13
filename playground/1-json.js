const { info } = require('console')
const fs = require('fs')
// const book={
//     tittle:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

//  const parsedData = JSON.parse(bookJSON)
//  console.log(parsedData.author)
// fs.writeFileSync('1-json.json',bookJSON)

//Leitura do arquivo
// const dataBuffer = fs.readFileSync('1-json.json')
//Convertendo os dados para string
// const dataJSON = dataBuffer.toString()
//Passando os dados para um objeto
// const data = JSON.parse(dataJSON)
//Acessando uma propriedade do objeto
// console.log(data.tittle)
//console.log(dataBuffer.toString())

const infoJSON = fs.readFileSync('1-json.json')
const dataJSON = infoJSON.toString()
const data = JSON.parse(dataJSON)
data.name = 'Victor'
data.age = 23

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)