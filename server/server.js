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

server.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

server.use(express.static(path.join(__dirname, '../build')));

server.listen(config.PORT, () => {
  console.log(`Listening on port: ${config.PORT}`);
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
