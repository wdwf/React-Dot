const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  return res.json({ message: 'okayy' })
})

app.listen(port, () => {
  console.log(`Aplicação rodando na rota http://localhost:${port}`);
})