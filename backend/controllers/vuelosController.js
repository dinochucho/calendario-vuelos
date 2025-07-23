const pool = require('../db/conexion');

exports.listarVuelos = async (req, res) => {
  try {
    const [filas] = await pool.query('SELECT * FROM vuelos');
    res.json(filas);
  } catch (error) {
    console.error("❌ Error real en listarVuelos:", error.message);
    res.status(500).json({ error: 'Error al obtener vuelos' });
  }
};

exports.buscarVuelos = async (req, res) => {
  const { fecha, destino } = req.body;

  try {
    // En versiones futuras: consulta real a APIs como Skyscanner o Amadeus
    res.json({
      mensaje: `Buscar vuelos a ${destino} para el día ${fecha}`,
      fecha,
      destino
    });
  } catch (error) {
    console.error("❌ Error real en buscarVuelos:", error.message);
    res.status(500).json({ error: 'Error al buscar vuelos' });
  }
};