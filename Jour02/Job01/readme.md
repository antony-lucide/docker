# Job01 - Apache PHP Docker

## 📝 Description
Configuration d'un serveur Apache avec PHP dans un conteneur Docker.

## 🛠️ Structure du projet
```
Job01/
├── Dockerfile
├── index.php
└── readme.md
```

## 🚀 Instructions

1. Construction de l'image :
```bash
docker build -t mon-apache-php .
```

2. Lancement du conteneur :
```bash
docker run -d -p 8080:80 mon-apache-php
```

3. Accès à l'application :
- Ouvrir un navigateur
- Aller à l'adresse : http://localhost:8080

## 🔍 Vérification
- L'application devrait afficher "Hello World"
- Le serveur Apache devrait être accessible sur le port 8080

## 📌 Notes
- Le Dockerfile utilise PHP 8.2 avec Apache
- Les permissions sont correctement configurées
- Le module rewrite d'Apache est activé

## 🐛 Résolution des problèmes courants
Si l'image ne se construit pas :
1. Vérifier que Docker est bien démarré
2. Supprimer l'ancienne image : `docker image rm mon-apache-php`
3. Nettoyer le cache Docker : `docker system prune -a`
4. Reconstruire l'image

## 📸 Captures d'écran et explications

### 1. Interface Web (localhost:8080)
![Interface Web](image.png)
- Affichage de la page web sur `localhost:8080`
- Message "Hello World" affiché correctement
- Interface épurée montrant que le serveur Apache fonctionne correctement
- La barre d'adresse montre bien le port 8080 configuré

### 2. Build Docker (Terminal)
![Build Docker](copy.png)
- Temps de build total : 48.3s
- Étapes du build :
  1. `load build definition` (0.1s) : Chargement du Dockerfile
  2. `transferring dockerfile` (0.0s) : Transfert du contenu (4398 bytes)
  3. `load metadata` (3.3s) : Récupération des métadonnées de l'image PHP Apache
  4. `pull token` (0.0s) : Authentification Docker Hub
  5. `load .dockerignore` (0.1s) : Vérification des fichiers à ignorer
  6. `transferring context` (0.0s) : Transfert du contexte de build
  7. `FROM` (39.9s) : Téléchargement et configuration de l'image de base

## ✅ Points de vérification
- Build réussi sans erreurs
- Image créée avec succès
- Page web accessible
- Apache fonctionne correctement
- Port 8080 correctement mappé

## 🔍 Détails techniques
- Image de base : php:8.2-apache
- Port exposé : 80 (interne) -> 8080 (externe)
- Nom de l'image : apache-simple