const { default: chalk } = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs')
const {getNotes,addNotes,removeNotes,listNotes,readNote}=require('./notes');


//create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Body of Add command',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        addNotes(argv.title,argv.body)
    }
  
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note!',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe: 'Element to Remove'
        }
    },
    handler(argv){
        removeNotes(argv.title)
    }
})
//create read command
yargs.command({
    command:'read',
    describe: 'Read a note!',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe: 'Read Command'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})
//create List command
yargs.command({
    command:'list',
    describe: 'List of notes!',
    handler(){
        console.log(chalk.green.bold('Your Notes!'));
        listNotes()
    }
})

yargs.parse()


