// const water = (name) => {
//     console.log(`${name}, please switch off the motor`);

// }
// setTimeout(water , 5000, 'mamta');



const fs = require('fs')
fs.access('file.txt', fs.constants.F_OK, (err)=>
{
    if(err)
    {
        console.error('sorry file is not there ')
    }
    else{
        console.log('file is present')
    }
}

)