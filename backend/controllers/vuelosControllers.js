const pool = require('../db/conexion');

exports.listarVuelos = async (req, res) => {
  try {
    const [filas] = await pool.query('SELECT * FROM vuelos');
    res.json(filas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener vuelos' });
  }
};

exports.buscarVuelos = async (req, res) => {
  const { fecha, destino } = req.body;
  res.json({ mensaje: `Buscar vuelos a ${destino} para el día ${fecha}` });
};