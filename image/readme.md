Voici un ensemble de commandes pour chaque action demandée :
🔹 Suppression d'un conteneur spécifique

docker rm mon_conteneur

🔹 Suppression de plusieurs conteneurs

docker rm conteneur1 conteneur2 conteneur3

🔹 Suppression de tous les conteneurs arrêtés

docker container prune -f

🔹 Forcer la suppression d'un conteneur actif

docker rm -f mon_conteneur

🖼️ Suppression d'une image spécifique

docker rmi mon_image

🖼️ Suppression de plusieurs images

docker rmi image1 image2 image3

Vous avez dit :
presente les et ce qu'ils font dans un beau format readme
ChatGPT a dit :

Voici un README bien formaté avec des explications claires pour chaque commande Docker de suppression :
🚀 Guide de Suppression des Conteneurs et Images Docker

Ce guide explique comment supprimer des conteneurs et des images Docker avec des commandes simples et efficaces.
📦 Suppression des Conteneurs
🗑️ 1. Supprimer un conteneur spécifique

docker rm mon_conteneur

    📝 Remplacez mon_conteneur par l'ID ou le nom du conteneur à supprimer.

🗑️ 2. Supprimer plusieurs conteneurs

docker rm conteneur1 conteneur2 conteneur3

    📝 Listez plusieurs noms ou ID de conteneurs pour les supprimer en une seule commande.

🗑️ 3. Supprimer tous les conteneurs arrêtés

docker container prune -f

    🚨 Attention : Cette commande supprime tous les conteneurs arrêtés sans confirmation.

🛑 4. Forcer la suppression d'un conteneur actif

docker rm -f mon_conteneur

    ⚠️ Cela arrête et supprime immédiatement le conteneur, même s'il est en cours d'exécution.

🖼️ Suppression des Images
🗑️ 5. Supprimer une image spécifique

docker rmi mon_image

    📝 Remplacez mon_image par l'ID ou le nom de l’image.

🗑️ 6. Supprimer plusieurs images

docker rmi image1 image2 image3

    📝 Fournissez plusieurs noms ou ID d’images pour les supprimer simultanément.

🗑️ 7. Supprimer toutes les images inutilisées

docker image prune -f

    🛑 Supprime uniquement les images dangling (celles qui n'ont pas de tag).

🗑️ 8. Supprimer toutes les images non utilisées par un conteneur

docker image prune -a -f

    ⚠️ Cette commande supprime toutes les images qui ne sont pas utilisées par un conteneur actif.

🛑 9. Forcer la suppression d'une image spécifique

docker rmi -f mon_image

    📝 Cela supprime l’image même si elle est encore utilisée par un conteneur.

⚠️ Correction d'une erreur fréquente

Si vous essayez de supprimer une image encore utilisée par un conteneur, vous verrez cette erreur :

Error response from daemon: conflict: unable to remove repository reference

✅ Solution :

    Supprimez d'abord les conteneurs utilisant cette image avant de supprimer l’image.
    Vous pouvez utiliser cette commande pour forcer la suppression de tous les conteneurs avant de supprimer une image :

    docker rm -f $(docker ps -aq)
    docker rmi mon_image

🎯 Conclusion

Ce guide vous permet de nettoyer efficacement votre environnement Docker en supprimant conteneurs et images inutiles