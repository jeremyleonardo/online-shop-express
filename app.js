const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.get("/favicon.ico", (req, res, next) => res.sendStatus(204));
app.use('/', (req, res, next) => res.status(404).sendFile(path.join(__dirname, 'views', '404.html')));

const server = http.createServer(app);

server.listen(3000);
console.log('Listening...');