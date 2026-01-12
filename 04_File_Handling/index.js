// import { readfile } from 'fs/promises'
import { create } from "domain";
import { readFile, writeFile, appendFile,mkdir } from "fs/promises";
// Read file
const read_file = async (fileName)=>{
const data = await readFile(fileName, "utf-8")
console.log(data)
}
// call your read file
read_file('sample.txt')

// Create file
const creat_file = async(fileName,content)=>{
await writeFile(fileName,content)
console.log("File create Sucessfully..")
}
creat_file("ai.py", "This is a testing file")
creat_file("App.jsx", "This is a Ract File")

// add content to file
const append_File = async(fileName,content)=>{
    await appendFile(fileName,content);
    console.log("extra content added successfully...")
}
append_File("App.jsx"," This is my extra content")


// Create a folder
const creat_dir = async(dir)=>{
    await mkdir(dir,{recursive:true});
}

creat_dir('public')
creat_dir('src/py')