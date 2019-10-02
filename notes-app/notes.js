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
    const duplicateNotes=notes.filter( (note) => note.title === title
    )
    if(duplicateNotes.length ===0)
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
    listNotes:listNotes

}