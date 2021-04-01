const c = require('ansi-colors');
const path = require('path')

var beeper = require('beeper');
var log = require('fancy-log');
var spawn = require('child_process').spawn;


function now(params) {
     // Spawn Retire.js as a child process
    // You can optionally add option parameters to the second argument (array)
    const command = process.cwd()+ "/node_modules/retire/bin/retire"
    var child = spawn(command, ['package.json'], {cwd: process.cwd()});
    
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        log(c.red(data));
        beeper();
    });
}

function ok(params) {
    console.log("sawa " + process.cwd()+ "/node_modules/retire/bin/retire");
}

now();