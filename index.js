const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to any available port

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route to handle POST requests
app.post('/api/data', (req, res) => {
  // Access the data sent from Unity WebGL
  const data = req.body;

  // Call your function here with the data
  // Replace this with your actual function
  // Example: myFunction(data);

  // Send a response back to Unity
  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
