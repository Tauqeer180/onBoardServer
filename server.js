const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const ci = require('./routes/api/CI');
const cti = require('./routes/api/CTI');
const kyc = require('./routes/api/kyc');
const kyb = require('./routes/api/kyb');
const sd = require('./routes/api/supportingDoc');

const app = express();

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;


// Connect to DB
mongoose.connect(db, {    useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('DB connected'))
.catch(err => console.log(err))


// use routes
app.use('/api', ci);
app.use('/api', cti);
app.use('/api', kyc);
app.use('/api', kyb);
app.use('/api', sd);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`))