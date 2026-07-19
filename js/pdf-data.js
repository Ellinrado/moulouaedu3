/* ============================================================
   pdf-data.js
   ------------------------------------------------------------
   C'EST ICI QUE TU DÉCLARES TES PDF.
   Pour chaque PDF que tu ajoutes dans un dossier (ex: pdf/college/cours/),
   ajoute une ligne ici avec :
     - titre    : ce qui s'affiche sur le site
     - fichier  : le nom EXACT du fichier PDF (avec .pdf)
     - matiere  : la matière (Maths, Physique, Français...)

   Tu n'as pas besoin de toucher au reste du code.
   ============================================================ */

const PDF_DATA = {
  college: {
     
    cours: [
       { titre: "Les équations 1-APIC", fichier: "1.pdf", matiere: "Maths" },
        { titre: "Enchaînement d’opérations sur les nombres entiers et décimaux 1-APIC", fichier: "2.pdf", matiere: "Maths" },   { titre: "Les nombres fractionnaires 1-APIC", fichier: "3.pdf", matiere: "Maths" },
     { titre: "Notions élémentaires de géométrie 1-APIC", fichier: "4.pdf", matiere: "Maths" },
       // { titre: "Les fractions", fichier: "fractions.pdf", matiere: "Mathématiques" },
    ],
    exercices: [
      // { titre: "Exercices sur les fractions", fichier: "exo-fractions.pdf", matiere: "Mathématiques" },
    ],
  },

  lycee: {
    cours: [
      // { titre: "Les suites numériques", fichier: "suites.pdf", matiere: "Mathématiques" },
    ],
    exercices: [
      // { titre: "Série d'exercices - Suites", fichier: "exo-suites.pdf", matiere: "Mathématiques" },
    ],
  },

  universite: {
    cours: [ { titre: "Statistique appliquée à la recherche", fichier: "a.pdf", matiere: "Formation doctorale : Statistique descriptive" },
            { titre: "Statistique appliquée à la recherche", fichier: "b.pdf", matiere: "Formation doctorale : Statistique multivariée" },
            { titre: "Statistique appliquée à la recherche", fichier: "*c.pdf", matiere: "Formation doctorale : Statistique inferentielle" },
      // { titre: "Algèbre linéaire - Chapitre 1", fichier: "algebre-chap1.pdf", matiere: "Mathématiques" },
    ],
    exercices: [
      // { titre: "TD n°1 - Algèbre linéaire", fichier: "td1-algebre.pdf", matiere: "Mathématiques" },
    ],
  },
};
