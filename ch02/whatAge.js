const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const {name , year} = parsedUrl.query;
    res.writeHead(200, {'Content_type': 'Text/plain'});

    if (name && year){
        const currentYear = new Date().getFullYear()
        const age = currentYear - parseInt(year);
        if (isNaN(age)){
            res.statusCode = 400;
            res.end('Invalid year of birth');
        } else {
            const sayHello = `${name} is ${age} year olds`;
            res.end(sayHello);
        }
    } else {
        res.statusCode = 400;
        res.end('The request must contain name and title information');
    }
});

server.listen(port, () => console.log(`Server started on http://localhost:${port}`))
