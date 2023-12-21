const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const {name , title} = parsedUrl.query;
    res.writeHead(200, {'Content_type': 'Text/plain'});

    if (name && title){
        const sayHello = `Hello ${title} ${name}`;
        res.end(sayHello);
    } else {
        res.statusCode = 400;
        res.end('Yêu cầu phải chứa thông tin tên và danh xưng');
    }
});

server.listen(port, () => console.log(`Server started on http://localhost:${port}`))
