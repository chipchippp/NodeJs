const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((reg, res)=>{
    res.writeHead(200, { 'Nodejs' : 'Text/plain'});
    // res.write(reg.require);
    res.end("Hello world Nodejs");
})

server.listen(port, () => console.log(`server started on port ${port}; \n` + 'press Ctrl-C to terminate....'))