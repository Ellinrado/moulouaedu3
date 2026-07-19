# MoulouaEdu

Site statique (HTML/CSS/JS, aucun serveur ni installation requise) pour publier
tes cours et exercices en PDF, classés par niveau : Collège, Lycée, Université.

## Structure

```
MoulouaEdu/
├── index.html          → page d'accueil
├── college.html        → page Collège (Cours / Exercices)
├── lycee.html          → page Lycée (Cours / Exercices)
├── universite.html     → page Université (Cours / Exercices)
├── css/style.css
├── js/
│   ├── pdf-data.js     → LA LISTE DE TES PDF (à éditer)
│   └── script.js       → logique du site (ne pas toucher, sauf si tu sais ce que tu fais)
├── images/
│   ├── logo.png        → à ajouter (optionnel)
│   └── background.png  → à ajouter (optionnel)
└── pdf/
    ├── college/{cours,exercices}/
    ├── lycee/{cours,exercices}/
    └── universite/{cours,exercices}/
```

## Ajouter un PDF — 2 étapes

1. **Copie le fichier PDF** dans le bon dossier, par exemple :
   `pdf/lycee/cours/suites-numeriques.pdf`

2. **Déclare-le** dans `js/pdf-data.js`, dans la bonne section :

   ```js
   lycee: {
     cours: [
       { titre: "Les suites numériques", fichier: "suites-numeriques.pdf", matiere: "Mathématiques" },
     ],
     ...
   }
   ```

   - `titre`   : ce qui s'affiche sur la carte
   - `fichier` : le nom exact du fichier (avec `.pdf`)
   - `matiere` : utilisée pour l'affichage et pour la recherche

C'est tout : la carte apparaît automatiquement sur la page, avec un bouton
"Ouvrir" qui pointe vers ton PDF. Pas besoin de toucher au HTML ni au CSS.

## Voir le site en local

Comme le site charge des fichiers (`pdf-data.js`, PDF...), ouvrir `index.html`
directement avec un double-clic peut être bloqué par le navigateur. Le plus
simple est de lancer un petit serveur local depuis le dossier du projet :

```bash
# Python (déjà installé sur la plupart des systèmes)
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans ton navigateur.

## Mettre le site en ligne (gratuit)

Le site est 100% statique, donc tu peux l'héberger gratuitement sur :
- **GitHub Pages** (mets le dossier dans un repo, active Pages dans les réglages)
- **Netlify** ou **Vercel** (glisser-déposer le dossier)

## Personnaliser les couleurs

Les couleurs sont centralisées en haut de `css/style.css`, dans `:root`.
Chaque niveau a sa propre couleur d'accent :
- `--accent-college` (bleu craie)
- `--accent-lycee` (or craie)
- `--accent-univ` (rouille)
