import http from 'http'

const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.end(`<h1>Your request has been accepted</h1>`)


if (req.url === '/wdm'){
    res.end("Welcome to the web dev mastery")
}else if(req.url === '/youtube'){
    // res.end("We are showing the YouTube page")
     res.writeHead(302, {
            Location: 'https://www.youtube.com'
        })
        res.end()
}else{
    res.end ("Invalid request")
}
})
const port = 1200
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})