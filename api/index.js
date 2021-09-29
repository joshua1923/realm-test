const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use('/gallery', require(path.join(__dirname, 'routes/galleryRoutes')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});