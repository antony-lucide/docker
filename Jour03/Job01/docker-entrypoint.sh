#!/bin/bash
set -e

# Définir les permissions sur le volume monté
chown -R www-data:www-data /var/www/html/game-data
chmod -R 777 /var/www/html/game-data

# Exécuter la commande passée en paramètre (apache2-foreground)
exec "$@" 