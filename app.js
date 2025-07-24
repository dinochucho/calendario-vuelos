require('dotenv').config();
const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// ✅ Esta línea permite servir index.html desde /public
app.use(express.static('public'));

// ✅ Conectamos las rutas de vuelos
const vuelosRouter = require('./routes/vuelos');
app.use('/api/vuelos', vuelosRouter);

// ❌ Comentamos la ruta que bloqueaba el index
// app.get('/', (req, res) => {
//   res.send('¡Bienvenido al Calendario de Vuelos ✈️!');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});