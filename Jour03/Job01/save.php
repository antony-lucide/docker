<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Ajouter des logs
error_log("Début du traitement de save.php");

// Récupérer les données POST
$data = json_decode(file_get_contents('php://input'), true);
error_log("Données reçues : " . print_r($data, true));

// Vérifier si les données sont valides
if ($data === null) {
    error_log("Erreur: Données JSON invalides");
    http_response_code(400);
    die("Invalid JSON data");
}

// Ajouter l'horodatage
$data['timestamp'] = date('Y-m-d H:i:s');
error_log("Données avec horodatage : " . print_r($data, true));

// Chemin vers le fichier results.json
$file = __DIR__ . '/game-data/results.json';
error_log("Chemin du fichier : " . $file);

// Lire les résultats existants
$results = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
if ($results === null) $results = [];
error_log("Résultats existants : " . print_r($results, true));

// Ajouter le nouveau résultat
$results[] = $data;
error_log("Nouveaux résultats : " . print_r($results, true));

// Sauvegarder les résultats avec formatage JSON pour lisibilité
$success = file_put_contents($file, json_encode($results, JSON_PRETTY_PRINT));
error_log("Résultat de la sauvegarde : " . ($success !== false ? "Succès" : "Échec"));

if ($success === false) {
    error_log("Erreur lors de l'écriture dans le fichier. Permissions : " . substr(sprintf('%o', fileperms($file)), -4));
    http_response_code(500);
    echo "Failed to save results";
} else {
    echo "Results saved successfully";
}
?> 