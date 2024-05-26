let http=require("http");

const server=http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader("content-type","text/html")
    res.end("HELLO WORLD");
})


server.listen(3000,"localhost",()=>{

    console.log("Server listening ...")
})