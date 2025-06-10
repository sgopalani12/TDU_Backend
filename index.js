const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jeansRoutes = require('./src/routes/jeansRoutes'); // adjust path as needed

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Denim University API');
});

app.use('/jeans', jeansRoutes);
app.use

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
