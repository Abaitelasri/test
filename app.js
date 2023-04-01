const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});