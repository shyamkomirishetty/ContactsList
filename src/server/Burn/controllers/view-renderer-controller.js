import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import Component from '../../index';

const router = express.Router();

const renderFullPage = html => `
<!doctype html>
  <html style="width:100%;height: 100%;overflow-y: auto;
    min-height: 700px;">

  <head>
    <title>Contacts List</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body style="width:inherit;height:inherit">
    <div id="root-app" style="width:inherit;height:inherit">${html}</div>
  </body>

</html>
    `;

const handleRenderer = () => {
  const html = ReactDomServer.renderToString(
    React.createElement(Component),
  );
  return renderFullPage(html);
};

router.get('/', (req, res) => {
  res.send(handleRenderer());
});

export default router;
