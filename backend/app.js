require('dotenv').config();
const express = require('express');
const cors = require('cors');
const vuelosRouter = require('./routes/vuelos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 Sirve archivos estáticos como index.html desde /public
app.use(express.static('public'));

// ❌ Esta ruta no debe existir si usás index.html
// app.get('/', (req, res) => {
//   res.send('¡Bienvenido al Calendario de Vuelos ✈️!');
// });

// Rutas para la API
app.use('/api/vuelos', vuelosRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🛫 Servidor corriendo en puerto ${PORT}`);
});