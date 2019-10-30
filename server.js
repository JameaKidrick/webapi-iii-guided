const express = require('express'); // importing a CommonJS module
const helmet = require('helmet') // importing helmet
const morgan = require('morgan')

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

// const dateLogger = (req, res, next) => {
//   console.log(new Date().toISOString())

//   next();
// }

const httpLogger = (req, res, next) => {
  console.log(
    `The Logger: [${new Date().toISOString()}] ${req.method} to ${req.url}`
  )
  next();
}

// TODO: change the gatekeeper to return a 400 if no password is provided and a message that says 'please provide a password'
  // if a password is provided and it is 'melon', call next, otherwise return a 401 with the message 'you shall not pass'
const gateKeeper = (req, res, next) => {
  // data can come in the body, url parameters, query string, and headers
  // new way of reading data sent by the client
  const password = req.headers.password || '';
  if(password === '' || undefined){
    res.status(401).json({ error: 'please provide a password' })
  }else if(password.toLowerCase() === 'melon'){
    next();
  }else{
    res.status(400).json({you: 'shall not pass!!'})
  }
  
}

// global middleware
server.use(helmet()) // third party
server.use(gateKeeper);
server.use(express.json()); // built-in
// server.use(dateLogger); // custom middleware
server.use(httpLogger); // custom middleware
server.use(morgan('dev')) // morgan shows status, time it took to get a response, and the size

server.use('/api/hubs', hubsRouter);


server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
