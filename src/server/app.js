import express from 'express';
import path from 'path';
import ContactsViewRendererController from './Contacts/controllers/view-renderer-controller';

const app = express();

app.use(express.static(path.join(__dirname, '/../../public')));

app.use('/', ContactsViewRendererController);

// catch invalid paths
app.get('*', (req, res) => {
  res.status(404).send('Page not found.');
});

module.exports = app;
