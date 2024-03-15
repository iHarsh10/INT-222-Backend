var zlib = require('zlib');
var fs = require('fs');
var brot = zlib.createBrotliCompress();
var r = fs.createReadStream('text.txt');
var w = fs.createWriteStream('text.txt.gz');
r.pipe(brot).pipe(w);