import React from 'react';

const style = { width: 'inherit', height: 'inherit' };

const Component = () => (
  <div style={style}>
    <div id="app" style={style} />
    <script src="/javascripts/bundle.js" />
  </div>
);

export default Component;
