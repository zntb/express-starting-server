require('dotenv').config();
const colors = require('colors');

const express = require('express');
const app = express();

const morgan = require('morgan');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/', (req, res) => {
  res.send('Hello from server!');
});

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => {
    console.log(colors.cyan.underline(`Server listen on PORT ${port}`));
  });
} catch (error) {
  console.log(colors.red(error));
  process.exit(1);
}
