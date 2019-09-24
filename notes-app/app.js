const fs = require('fs')

fs.writeFileSync('notes.txt','Amal was created by js')
fs.appendFile('notes.txt','Appended file')