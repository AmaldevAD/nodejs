const fs=require('fs')
const chalk=require('chalk')
const getNotes = function(){
    return "this returns a note"
}

//add
const addNote =function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function (note){
        return note.title === title
    })
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
const removeNotes =function(title){
    const notes = loadNotes()
    const filteredNotes =notes.filter(function(note){
    return note.title!=title
    })

    if(filteredNotes.length===notes.length)
    console.log(chalk.red("No title found"))
    else
    console.log(chalk.green("Removed"))

    saveNotes(filteredNotes)

}




//load file
const loadNotes = function(){
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
         return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//save File
const saveNotes = function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}




module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,

}