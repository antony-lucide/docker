const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Route de bienvenue
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API!' });
});

// Route pour vérifier le statut
app.get('/api/status', (req, res) => {
  connection.query('SELECT NOW() as time', (error, results) => {
    if (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Erreur de connexion à la base de données',
        error: error.message
      });
    }
    res.json({
      status: 'success',
      message: 'Connexion à la base de données établie',
      time: results[0].time
    });
  });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 