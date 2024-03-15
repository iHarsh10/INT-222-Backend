const fs = require('fs');
const zlib = require('zlib');

const filename = 'fileURLToPath.json';
const compressedFilename = 'fileURLToPath.json.gz';


const input = fs.createReadStream(filename);
const output = fs.createWriteStream(compressedFilename);
const compress = zlib.createGzip();

input.pipe(compress).pipe(output);

output.on('finish', () => {
  console.log('File compressed successfully.');

  const decompressedContent = zlib.gunzipSync(fs.readFileSync(compressedFilename)).toString();
  const jsonObject = JSON.parse(decompressedContent);


  console.log('Read JSON:', jsonObject);

  jsonObject.newKey = 'New Value';
  fs.writeFileSync(filename, JSON.stringify(jsonObject, null, 2));
  console.log('JSON file updated.');


  const newFilename = 'newFileURLToPath.json';
  fs.renameSync(filename, newFilename);
  console.log('File renamed to', newFilename);


  fs.appendFileSync(newFilename, '\n// Appended content', 'utf8');
  console.log('Content appended.');

  const copyFilename = 'copiedFileURLToPath.json';
  fs.copyFileSync(newFilename, copyFilename);
  console.log('File copied to', copyFilename);
});
