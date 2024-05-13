
# Rapport d’optimisation du projet ScrollyTelling

## Lien
[Page Speed Insights - Rapport du 13 mai 2024, 12:31:06](https://pagespeed.web.dev/analysis/https-tristan-tim-momo-com/ltzxj82eav?form_factor=desktop)

À partir du rapport Page Speed Insight, sélectionnez 3 éléments à corriger qui vont avoir le plus d’impact dans l’optimisation de la performance.

## Problème #1

### Serve images in next-gen formats

#### Nom du problème
Certaines images sont servies dans des formats non optimisés.

#### Action concrète pour résoudre le problème
1. Convertir les images en formats next-gen pour bénéficier d'une meilleure compression et d'une réduction de la taille des fichiers.
2. Utiliser des outils pour optimiser davantage la taille des images.

#### Résultat
Cela a augmenté mes performances de 1% donc de 96% a 97% 

## Problème #2

### Enable text compression

#### Nom du problème
La compression du texte n'est pas activée sur le serveur.

#### Action concrète pour résoudre le problème
1. Activer la compression pour compresser les fichiers texte tels que HTML, CSS et JavaScript.
2. Configurer correctement les en-têtes HTTP pour permettre la compression des ressources texte.

#### Résultat
mes bonnes pratiques sont passés de 96% a 100%

## Problème #3

### Serve static assets with an efficient cache policy

#### Nom du problème
La politique de mise en cache des ressources statiques n'est pas optimisée.

#### Action concrète pour résoudre le problème
1. Configurer les en-têtes de réponse HTTP pour définir des délais d'expiration appropriés pour les ressources statiques.
2. .

#### Résultat
.je n'ai pas arriver a le faire donc je pense que cela n'a pas changé grand chose.


## Rapport projet ScrollyTelling après optimisation

[Page Speed Insights - Rapport du 6 mai 2024, 17:53:00](https://pagespeed.web.dev/analysis/https-tristan-tim-momo-com/57q9heeswx?form_factor=desktop)

