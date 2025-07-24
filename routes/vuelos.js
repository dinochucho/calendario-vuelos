const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// POST /api/vuelos
router.post('/', async (req, res) => {
  const { fecha_ida, fecha_vuelta, destino, origen } = req.body;

  if (!fecha_ida || !fecha_vuelta || !destino || !origen) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'juan',
      password: 'xK6EVtx727',
      database: 'calendario_vuelos'
    });

    const [result] = await connection.execute(`
      INSERT INTO vuelos (origen, destino, fecha_ida, fecha_vuelta, precio)
      VALUES (?, ?, ?, ?, ?)
    `, [origen, destino, fecha_ida, fecha_vuelta, 0]);

    const id = result.insertId;
    res.status(201).json({ id, origen, destino, fecha_ida, fecha_vuelta, precio: 0 });
    connection.end();
  } catch (err) {
    console.error('❌ Error al insertar vuelo:', err);
    res.status(500).json({ error: 'Error al insertar vuelo' });
  }
});

// GET /api/vuelos
router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'juan',
      password: 'xK6EVtx727',
      database: 'calendario_vuelos'
    });

    const [rows] = await connection.execute('SELECT * FROM vuelos');
    res.json(rows);
    connection.end();
  } catch (err) {
    console.error('❌ Error al obtener vuelos:', err);
    res.status(500).json({ error: 'Error al obtener vuelos' });
  }
});

// GET /api/vuelos/baratos
router.get('/baratos', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'juan',
      password: 'xK6EVtx727',
      database: 'calendario_vuelos'
    });

    const [rows] = await connection.execute(`
      SELECT * FROM vuelos
      ORDER BY precio ASC
      LIMIT 5
    `);

    res.json(rows);
    connection.end();
  } catch (err) {
    console.error('❌ Error al obtener vuelos baratos:', err);
    res.status(500).json({ error: 'Error al obtener vuelos baratos' });
  }
});

module.exports = router;