const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Configuration CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// Configuration du pool de connexions MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'projetdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Vérification de la connexion au démarrage
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erreur lors de la connexion à MySQL:', err);
    return;
  }
  console.log('MySQL connecté !');
  connection.release();
});

// Route de bienvenue
app.get('/', (req, res) => {
  console.log('Route / appelée');
  res.json({ message: 'Bienvenue sur l\'API!' });
});

// Route pour vérifier le statut
app.get('/api/status', (req, res) => {
  console.log('Route /api/status appelée');
  
  pool.query('SELECT NOW() as time', (error, results) => {
    if (error) {
      console.error('Erreur MySQL:', error);
      return res.status(500).json({
        status: 'error',
        message: 'Erreur de connexion à la base de données',
        error: error.message
      });
    }
    
    console.log('Requête MySQL réussie:', results);
    res.json({
      status: 'success',
      message: 'Connexion à la base de données établie',
      time: results[0].time
    });
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur non gérée:', err);
  res.status(500).json({
    status: 'error',
    message: 'Erreur serveur interne',
    error: err.message
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 