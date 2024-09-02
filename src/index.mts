import express from 'express';

const app = express()
const port = 3501;
const server =  app.listen(port);
server.on('listening', () => console.log(`server is listening on port: ${port}`))
//const port = app.listen('')

