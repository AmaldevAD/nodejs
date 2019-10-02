// const fs = require('fs')

// fs.writeFileSync('notes.txt','Amal was created by js')
// fs.appendFile('notes.txt','Appended file')
// const add=require('./util')
// const sum=add(5,8)
// console.log(sum)


// const validator=require('validator')





//const r_note=note()
//console.log(r_note)
// console.log(validator.isEmail('andreweg.com'))


//log(chalk.red('succes'))
//to get input fro0m command line
//log(chalk.green(process.argv[3]))

//console.log(yargs.argv)


//notes app
const notes =require("./notes")
const chalk=require('chalk')
const log=console.log
const yargs=require('yargs')

//customizing yarg command

//adding command
yargs.command({
    command :'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // log("Title : " + argv.title)
        // log("Body :" + argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//removing command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Remove title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // log("removing")
        notes.removeNotes(argv.title)
    }
})

//list command
yargs.command({
    command:"list",
    describe:"list a note",
    handler(){
        // log("listing a note")
        notes.listNotes()
    }
})

//read command
yargs.command({
    command:"read",
    describe:"Read a note",
    builder:{
        title:{
            describe:'Read Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
    //log("Reading a note")
    notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)



