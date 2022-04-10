// import * as express from 'express';

// const app = express();

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./app/db/conn');
const users = require('./app/models/userSchema');
const cors = require('cors');
const router = require('./app/routes/router');

const port = 8000;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
  console.log(`Server successfully run in port: ${port}`)
});