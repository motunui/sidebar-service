const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const compress = require('compression');

const server = express();

server.use(cors());
server.use(compress());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../build')));

server.listen(config.PORT, () => {
  console.log(`Listening on port: ${config.PORT}`);
});

server.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '../build/index.html'));
});
