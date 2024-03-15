// const { buffer } = require("stream/consumers");

const buffer1 = Buffer.alloc(100);

buffer1.write("welcome to node js")

const a = buffer1.toString('utf-8');
console.log(a);
