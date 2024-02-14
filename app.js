import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import colors from 'colors';
import morgan from 'morgan';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
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
