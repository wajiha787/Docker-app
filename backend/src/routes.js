const express = require('express');
const router = express.Router();

// Example route for getting data
router.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Example route for posting data
router.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

module.exports = router;