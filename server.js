const express = require('express');
const app = express();

// Welcome endpoint
app.get('/', (req, res) => {
  res.send('Hello from the Test Demo App!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Add two numbers endpoint
app.get('/add/:a/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }
  const sum = a + b;
  res.json({ result: sum });
});

// Only start the server if this file is run directly (not during tests)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app; // Export for testing
