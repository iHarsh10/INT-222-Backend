const fs = require('fs')
// fs.access('file.txt', fs.constants.F_OK, (err)=>
// {
//     if(err)
//     {
//         console.error('sorry file is not there ')
//     }
//     else{
//         console.log('file is present')
//     }
// }
// )

// fs.readFile('file.txt',(err,data)=>
// {
//     if(err)
//     {
//         console.error("error")
//     }else{
//         console.log(data)
//     }
// }
// )

{
    try
    {
        const a = fs.readFileSync('file.txt', 'utf-8')
        console.log(a)
    }
    catch(e)
    {
        console.error('error')
    }

    function square(a)
    {return a*a}

    const result = square(10)
    console.log(result)
}



// fs.writeFile('file.txt','content that i want ', (err)=>{
//     if(err){
//         console.error('print an error ')
//     }else{
//         console.log('file is updated')
//     }
// })

// fs.appendFile('file.txt','hello', (err)=>{
//     if(err){
//         console.error('print an error')
//     }else{
//         console.log('print appended')
//     }
// })

// fs.rename('hello.txt','file.txt', (err)=>{
//     if(err){
//         console.error('print an error')
//     }else{
//         console.log('print appended')
//     }
// })

// fs.close('hello.txt', (err)=>{
//     if(err){
//         console.error('print an error')
//     }else{
//         console.log('print close')
//     }
// })

// fs.copyFile('hello.txt','file.txt', (err)=>{
//     if(err){
//         console.error('print an error')
//     }else{
//         console.log('print appended')
//     }
// })

// fs.s

// const route = "D:/INT 222/test"
// fs.mkdir('route', (err)=>{
//     if(err){
//         console.error("")
//     }
//     else
//     {
//         console.log('folder create', {recursive:true})
//     }
// }
// )