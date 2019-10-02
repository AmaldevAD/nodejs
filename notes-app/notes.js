const fs=require('fs')
const chalk=require('chalk')
const getNotes = ()=>{
    return "this returns a note"
}

//add
const addNote =(title,body)=>{
    const notes=loadNotes()
    // const duplicateNotes=notes.filter(function (note){
    //     return note.title === title
    // })
    //const duplicateNotes=notes.filter( (note) => note.title === title )
    const duplicateNote =notes.find((nt)=>nt.title ===title)
    // if(duplicateNotes.length ===0)
    if(!duplicateNote)
    {
        notes.push({
        title:title,
        body:body
        })
        saveNotes(notes)
        console.log("Added")
    }else{
        console.log('Duplicate Title')
    }
}

//remove
const removeNotes =(title)=>{
    const notes = loadNotes()
    // const filteredNotes =notes.filter(function(note){
    // return note.title!=title
    // })
    const filteredNotes =notes.filter((note)=>note.title!=title)

    if(filteredNotes.length===notes.length)
    console.log(chalk.red("No title found"))
    else
    console.log(chalk.green("Removed"))

    saveNotes(filteredNotes)

}

//listing

const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log(chalk.blue(note.title))
    })
}

//read
const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((nt)=> nt.title===title
    )
    if(!note)
    console.log(chalk.red("Not found"))
    else
    console.log(chalk.green(note.body))
}



//load file
const loadNotes = ()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
         return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//save File
const saveNotes = (notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}




module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote

}