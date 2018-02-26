import express from 'express';
import app from './app';

const port = process.env.PORT || 8081;

express().get('/', (req, res) => {
  res.end(app());
})
.listen(port, () => console.log(`Running on :${port}`));

if (module.hot) {
  module.hot.accept('./app');
}
