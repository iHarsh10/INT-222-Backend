const filename = 'fileURLToPath.json';
const compressedFilename = 'fileURLToPath.json.gz';


const r = fs.createReadStream(filename);
const w = fs.createWriteStream(compressedFilename);
const compress = zlib.createGzip();

r.pipe(compress).pipe(w);

