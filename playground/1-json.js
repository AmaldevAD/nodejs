const fs=require('fs')

const book ={
    title:"Your Dreams are mine now",
    author:"Ravinder Singh"
}

const bookJSON=JSON.stringify(book)
// console.log(bookJSON)
//fs.writeFileSync('1-json.json',bookJSON)
// const parseData=JSON.parse(bookJSON)
// console.log(parseData.author)
const data = fs.readFileSync('1-json.json').toString()

const pData=JSON.parse(data)
pData.name="AMAl"
pData.age="19"

const writeData=JSON.stringify(pData)

fs.writeFileSync('1-json.json',writeData)
console.log(pData)