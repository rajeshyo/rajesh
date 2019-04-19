const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cloudinary = require('cloudinary')
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');
const { mongoose } = require('./server/db.js');
var employeeController = require('./server/controllers/employeeController.js');
require('./server/handlers/cloudinary');

app.use(cors({ origin: 'http://localhost:4200' }));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// // API location
// app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

app.use('/employees', employeeController);












// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cloudinary = require('cloudinary')
// const path = require('path');
// const http = require('http');

// const { mongoose } = require('./server/db.js');
// var employeeController = require('./server/controllers/employeeController.js');
// require('./server/handlers/cloudinary');


// // API file for interacting with MongoDB
// const api = require('./server/routes/api');

// // Parsers
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));

// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// // // API location
// // app.use('/api', api);

// // Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// var app = express();
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

// app.listen(3001, () => console.log('Server started at port : 3001'));


// app.use('/employees', employeeController);
