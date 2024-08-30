const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files from /var/web/html
app.use(express.static('/var/www/html'));

// Handle requests to the root
app.get('/', (req, res) => {
  res.sendFile(path.join('/var/www/html', 'index.html'));
});

// Handle POST requests to /submit
app.post('/submit', (req, res) => {
  // Access submitted data via req.body
  const formData = req.body;
  console.log('Form data received:', formData);

  // Here you can process the data, save it to a database, etc.
  
  // Respond with a success message or redirect
  res.send('Form data successfully received!');
  // Or redirect to another page
  // res.redirect('/');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
