var fs = require('fs');
var lines = undefined;

function calculateLines(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        var str = fileContents.toString();        
        lines = str.split('\n').length - 1;
        callback();
    })
}



function displayResult() {
    console.log(lines);
}

calculateLines (displayResult);