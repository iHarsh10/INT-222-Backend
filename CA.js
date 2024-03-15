const fs = require('fs')
fs.rename('file1.txt','file.txt', (err)=>{
    if(err){
        console.error('print an error')
    }else{
        console.log('print appended')
    }
})