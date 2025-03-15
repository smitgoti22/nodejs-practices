import fs from 'fs';
import os from 'os';

fs.writeFileSync('./myfile.txt', "hello my world.");    // sync
// fs.writeFile('./myfile2.txt', "hello my world.",(err)=>{});   // async
// const data = fs.readFileSync('myfile.txt','utf-8');
// fs.unlinkSync('./myfile.txt');
// const data  = fs.statSync('./myfile.txt', "hello my world.",(err)=>{});   // async


// console.log(os.cpus().length);

