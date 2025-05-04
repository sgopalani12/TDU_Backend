const express = require('express');
const router = express.Router();
const pool = require('../../db'); // adjust path based on where your db.js is located

router.get('/', (req, res) => {
  res.send('Denim University jeans');
});

router.get('/all-jeans', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jeans');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching jeans', err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  const {id}= req.params //params access the id on line 23 //
  
  try {
    const result = await pool.query('SELECT * FROM jeans WHERE id = $1', [id]);

    if(result.rows.length === 0){
      return res.status(404).json({ message: 'jeans not found'})
    }

    res.json(result.rows[0])
  } catch (err){
    console.error('error fetching jeans by id', err.message)
    res.status(500).send('server error')
  }
})

module.exports = router;
