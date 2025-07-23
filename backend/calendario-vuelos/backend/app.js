require('dotenv').config();
const express = require('express');
const cors = require('cors');
const vuelosRouter = require('./routes/vuelos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/vuelos', vuelosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🛫 Servidor corriendo en puerto ${PORT}`);
});