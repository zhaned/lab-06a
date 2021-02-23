const express = require('express');
const cors = require('cors');
const app = express();
const { cpuData } = require('./data.js');

app.use(cors());

app.get('/', (req, res) => {
  res.json({ Hello: 'World!' });
})

app.get('/data', (req, res) => {
  res.json({ results: cpuData });
})

app.get('/data/:id', (req, res) => {
  const id = Number(req.params.id);
  const dataItem = cpuData.find((poo) => poo.id === id);

  res.json({ results: dataItem });
})


module.exports = {
  app
}