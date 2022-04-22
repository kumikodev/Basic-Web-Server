// --------------------------------Modules--------------------------------


const express = require('express'); // require the express module
const bodyParser = require('body-parser'); // require the body-parser module
const cors = require('cors'); // require the cors module
const morgan = require('morgan'); // require the morgan module

// ---------------------------------Variables--------------------------------

const app = express(); // create an instance of express
const port = 3000; // set the port

// ---------------------------------Middleware--------------------------------

app.use(bodyParser.json()); // use the body-parser module
app.use(cors()); // use the cors module
app.use(morgan('dev')); // use the morgan module
app.use(bodyParser.urlencoded({ extended: true })); // use the body-parser module



// ---------------------------------Routes--------------------------------

app.get('/', (req, res) => {
    const time = new Date();
    res.send(time);
});

app.post('/', (req, res) => {
    const name = req.headers.name;
    const time = new Date();
    res.send(time);
    console.log(name);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})