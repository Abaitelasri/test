const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Define the endpoint for receiving webhook notifications
app.post('/webhook', (req, res) => {
  // Log the incoming data to the console
  console.log(req.body);

  // Send a response back to Kibana
  res.send('OK');
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/webhook', (req, res) => {
 // console.log(req.body);
 // res.sendStatus(200);
//});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
