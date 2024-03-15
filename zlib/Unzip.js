var zlib = require('zlib');
var fs = require('fs');
var Unzip = zlib.unzip();
var r = fs.createReadStream('tak.txt.gz');
var w = fs.createWriteStream('output.txt');
r.pipe(Unzip).pipe(w);