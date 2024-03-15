const fs = require('fs')
// fs.readFile("first.json", "utf-8", (err,data)=>
// {
//     if(err){
//         console.log('error')
//     }else{
//         // const a = JSON.parse(data)
//         console.log(JSON.parse(data))
//     }
// })

const newData = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
};

const jsonString = JSON.stringify(newData,null,2);
fs.writeFile('first.json',jsonString,(err)=>
{
    if(err){
        console.error('Error writing file: ',err);
        return;
    }
    console.log('Data has been written to the JSON file. ');
});