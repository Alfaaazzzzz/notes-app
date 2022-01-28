const chalk = require('chalk')
// const getNotes=require('./notes')

// console.log(getNotes());
// const notes= getNotes()
// console.log(notes);

const success= chalk.bold.green;
const Danger = chalk.bold.red.inverse;

console.log(success('Success'));
console.log(Danger('Error'));

console.log(process.argv[2]);


