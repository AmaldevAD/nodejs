// console.log("Starting")
// setTimeout(()=>{
//     console.log('2 sec timer')
// },2000)
// setTimeout(()=>{console.log("0sec timer")},0)
// console.log("Stopping")

const request = require('request')

const url ='https://api.darksky.net/forecast/068a4ba605b625d08796dadf7fd60a9f/37.8267,-122.4233'

request({url:url},(error,response) =>{
    const data =JSON.parse(response.body)
    console.log(data.currently)
})