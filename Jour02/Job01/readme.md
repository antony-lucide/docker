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
