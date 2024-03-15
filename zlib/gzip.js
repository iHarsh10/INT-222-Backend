var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.Gzip();

var r = fs.createReadStream('tak.txt');
var w = fs.createWriteStream('output.txt.gz');

r.pipe(gzip).pipe(w);