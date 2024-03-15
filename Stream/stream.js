//Stream 

const { Readable } = require('stream');
const inStream = new Readable({
    read() {}
})
inStream.push('here to study int222');
inStream.push('an industry oriented course ');
inStream.push(null);
inStream.pipe(process.stdout);



// var fs = require('fs');
// var data = '';
// var readerStream = fs.createReadStream('file.txt');
// readerStream.setEncoding('utf-8');
// readerStream.on('data', function(chunk){
//     data += chunk;

// });
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log("program Ended");

var fs = require('fs');
var data = ' hundred';
var readerStream = fs.createReadStream('file.txt');
readerStream.setEncoding('utf-8');
readerStream.on('data', function(chunk){
    data += chunk;

});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("program Ended");
