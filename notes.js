const fs = require("fs");
const chalk = require('chalk')
const getNotes = () => "Your Notes...";

const ChalkRemoved=chalk.bold.green.inverse
const ChalkNotFound=chalk.bold.red.inverse

const addNotes = (title, body) => {
  //to load the data and then save it instead of over-writing
  const notes = loadNotes();

  //to check if duplicate title is there or not
//   const duplicateNotes = notes.filter((note) => note.title === title);
//you can use filter method as well i have used and it's working fine. but find method is more efficient!!
  const duplicateNotes = notes.find((note) => note.title === title);
//if you are using filter method then you have to use if(duplicateNotes.length === 0){}

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.bold.green("Note Added Successfully!!"));
  } else {
    console.log(chalk.inverse.bold.red("This Title is already taken!!"));
  }
};

// to save the data after loading it
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const BufferData = fs.readFileSync("notes.json");
    const dataJSON = BufferData.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes=(title)=>{
    const notes= loadNotes()
    const KeepNotes=notes.filter((note)=>note.title !== title)

    if (notes.length>KeepNotes.length){
        console.log(ChalkRemoved('Note Removed!'));
        saveNotes(KeepNotes)
    }else{
        console.log(ChalkNotFound('Note not found'));
    } 
}

const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((data)=>{
        console.log(data.title);
    })
}

const readNote=(title)=>{
    const notes=loadNotes()
    const data=notes.find((note)=>note.title===title)
    if(data){
        console.log(chalk.bold.white(data.title), data.body);  
    }else{
        console.log(chalk.red.bold('Oops,Note not Found!'));
    }
    
}

module.exports = { getNotes, addNotes, removeNotes,listNotes,readNote };
