import express from 'express';
import path from 'path';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
import BurnViewRendererController from './Burn/controllers/view-renderer-controller';

const app = express();

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../../public')));

app.use('/', BurnViewRendererController);

// catch invalid paths
app.get('*', (req, res) => {
  res.status(404).send('Page not found.');
});

module.exports = app;
