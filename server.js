const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');


app.get('/',(req,res)=>{
    res.send('Hello');
});

app.get('/api/users/:id',(req,res)=>{
    res.send(req.params.id);
});

const server = http.createServer(app);

server.listen(port);