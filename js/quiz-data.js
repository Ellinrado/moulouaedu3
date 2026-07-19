/* ============================================================
   quiz-data.js
   ------------------------------------------------------------
   C'EST ICI QUE TU DÉCLARES TES QCM INTERACTIFS.

   Pour ajouter un nouveau QCM :
   1. Copie un bloc existant ci-dessous (par ex. "operations-1apic")
   2. Change son identifiant (la clé, ex: "fractions-1apic")
   3. Change le titre, la matière, et les questions
   4. Va dans js/pdf-data.js, section "exercices" du bon niveau,
      et ajoute une ligne comme ceci :
        { titre: "Mon titre", quiz: "fractions-1apic", matiere: "Maths" }
      (au lieu de "fichier", tu mets "quiz" avec le même identifiant)

   Chaque question peut être :
   - une question avec réponse à cocher :
       { enonce: "45 + 27 =", reponse: 72 }
   - un simple texte d'explication (pas de case à remplir) :
       { texte: "Amine achète 4 cahiers..." }
   ============================================================ */

const QUIZ_DATA = {

  "operations-1apic": {
    titre: "Les 4 opérations",
    matiere: "Maths",
    sections: [
      {
        titre: "1. Addition",
        questions: [
          { enonce: "45 + 27 =", reponse: 72 },
          { enonce: "128 + 63 =", reponse: 191 },
          { enonce: "356 + 214 =", reponse: 570 },
          { enonce: "1024 + 897 =", reponse: 1921 },
          { enonce: "72 + 8 =", reponse: 80 },
        ],
      },
      {
        titre: "2. Soustraction",
        questions: [
          { enonce: "58 - 23 =", reponse: 35 },
          { enonce: "140 - 65 =", reponse: 75 },
          { enonce: "500 - 178 =", reponse: 322 },
          { enonce: "932 - 456 =", reponse: 476 },
          { enonce: "81 - 19 =", reponse: 62 },
        ],
      },
      {
        titre: "3. Multiplication",
        questions: [
          { enonce: "6 × 7 =", reponse: 42 },
          { enonce: "12 × 5 =", reponse: 60 },
          { enonce: "9 × 8 =", reponse: 72 },
          { enonce: "13 × 4 =", reponse: 52 },
          { enonce: "15 × 6 =", reponse: 90 },
        ],
      },
      {
        titre: "4. Division",
        questions: [
          { enonce: "84 : 4 =", reponse: 21 },
          { enonce: "96 : 8 =", reponse: 12 },
          { enonce: "144 : 12 =", reponse: 12 },
          { enonce: "63 : 7 =", reponse: 9 },
          { enonce: "100 : 5 =", reponse: 20 },
        ],
      },
      {
        titre: "5. Enchaînement d'opérations",
        questions: [
          { enonce: "12 + 8 × 3 =", reponse: 36 },
          { enonce: "(15 - 5) × 2 =", reponse: 20 },
          { enonce: "40 : 5 + 6 =", reponse: 14 },
          { enonce: "9 × 3 - 7 =", reponse: 20 },
        ],
      },
      {
        titre: "6. Problème",
        questions: [
          { texte: "Amine achète 4 cahiers à 8 DH chacun et un stylo à 6 DH." },
          { texte: "Quel est le montant total qu'il doit payer ?" },
          { enonce: "Réponse (en DH) :", reponse: 38 },
        ],
      },
    ],
  },

  // Modèle vide à copier pour un nouveau QCM :
  // "identifiant-unique": {
  //   titre: "Titre affiché en haut de la page",
  //   matiere: "Maths",
  //   sections: [
  //     {
  //       titre: "1. Nom de la partie",
  //       questions: [
  //         { enonce: "2 + 2 =", reponse: 4 },
  //       ],
  //     },
  //   ],
  // },

};
