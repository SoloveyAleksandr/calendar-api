const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

router(app);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server has been started on PORT: ${PORT}!`);
  }
});



