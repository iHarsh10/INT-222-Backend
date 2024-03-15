var zlib = require('zlib');
var fs = require('fs');
var defl = zlib.createDeflate();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(defl).pipe(w);