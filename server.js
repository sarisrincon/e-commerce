const express = require('express');
const cors = require('cors');
const app = express();
const itemsRoutes = require('./server/routes/productRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', itemsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
