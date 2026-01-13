import path from 'path'

// Join two or more file
const fullpath = path.join('./path','index.py','test.java' )
console.log("file join = ", fullpath );


// absolute path check
const absolutePath = path.resolve();
console.log("We are working on = ", absolutePath)


// File extension
const extname = path.extname('resume.docx')
console.log('extname =',extname )

if(extname == '.pdf'){
    console.log('ok')
}else{
    console.log('not supported')
}