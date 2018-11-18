const express = require('express')
const morgan = require('morgan');
const http = require('http');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const dishRouter = require('./routes/dishRouter.js');
const promoRouter = require('./routes/promoRouter.js');
const leaderRouter = require('./routes/leaderRouter.js');
app.use('/dishes', dishRouter);
app.use('/promos', promoRouter);
app.use('/leaders', leaderRouter);
