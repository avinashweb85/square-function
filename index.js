// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const squareFunction = async (req, res) => {
  const { number } = req.body;

  if (!number || typeof number !== 'number') {
    return res.status(400).json({ error: 'Invalid input. Please provide a valid number.' });
  }

  const result = number * number;
  res.json({ result });
};

app.post('/square', squareFunction);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
