const chalk =require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        tittle:{
            describe:'Note tittle',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Tittle: '+ argv.tittle)
        console.log('Body: '+ argv.body)
    }
})

// Create remove comman
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe:'List a note',
    handler: function(){
        console.log('Listing out all notes')
    }
})

// Creat a read command
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler: function(){
        console.log('Reading a not e')
    }
})


yargs.parse()