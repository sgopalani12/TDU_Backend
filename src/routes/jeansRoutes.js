const express = require('express');
const router = express.Router();
const pool = require('../../db'); // adjust path based on where your db.js is located

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jeans');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching jeans', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
