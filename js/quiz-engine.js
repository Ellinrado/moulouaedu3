/* ============================================================
   quiz-engine.js — moteur générique pour tous les QCM
   Tu n'as normalement pas besoin de modifier ce fichier.
   Le contenu des QCM se déclare dans js/quiz-data.js
   ============================================================ */

function escapeHTMLQuiz(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getQuizIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("quiz");
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const titleEl = document.getElementById("quiz-title");
  const subtitleEl = document.getElementById("quiz-subtitle");
  const id = getQuizIdFromURL();
  const quiz = (typeof QUIZ_DATA !== "undefined") ? QUIZ_DATA[id] : null;

  if (!quiz) {
    container.innerHTML = `
      <div class="quiz-section">
        <p>Ce QCM n'existe pas ou n'est plus disponible.</p>
        <p><a href="college.html">&larr; Retour au Collège</a></p>
      </div>`;
    return;
  }

  if (titleEl) titleEl.textContent = quiz.titre;
  if (subtitleEl) subtitleEl.textContent = quiz.matiere ? `Matière : ${quiz.matiere}` : "";
  document.title = quiz.titre + " — MoulouaEdu";

  let html = "";
  quiz.sections.forEach((section, sIndex) => {
    html += `<div class="quiz-section"><h2>${escapeHTMLQuiz(section.titre)}</h2>`;
    let qNum = 1;
    section.questions.forEach((q, qIndex) => {
      if (q.texte !== undefined) {
        html += `<div class="probleme-text"><p>${escapeHTMLQuiz(q.texte)}</p></div>`;
      } else {
        const inputId = `q_${sIndex}_${qIndex}`;
        html += `
          <div class="quiz-row">
            <span class="num">${qNum})</span>
            <span>${escapeHTMLQuiz(q.enonce)}</span>
            <input type="text" id="${inputId}" data-answer="${escapeHTMLQuiz(q.reponse)}" inputmode="decimal" autocomplete="off">
          </div>`;
        qNum++;
      }
    });
    html += `</div>`;
  });

  container.innerHTML = html;
  attachQuizActions();
}

function attachQuizActions() {
  const checkBtn = document.getElementById("check-btn");
  const resetBtn = document.getElementById("reset-btn");
  const scoreDisplay = document.getElementById("score-display");
  const inputs = Array.from(document.querySelectorAll('#quiz-container input[data-answer]'));

  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      let correct = 0;
      inputs.forEach((input) => {
        const expected = parseFloat(String(input.dataset.answer).replace(",", "."));
        const raw = input.value.trim().replace(",", ".");
        const value = parseFloat(raw);
        input.classList.remove("is-correct", "is-wrong");
        if (raw !== "" && !isNaN(value) && value === expected) {
          input.classList.add("is-correct");
          correct++;
        } else {
          input.classList.add("is-wrong");
        }
      });
      const total = inputs.length;
      const pct = total ? Math.round((correct / total) * 100) : 0;
      if (scoreDisplay) {
        scoreDisplay.textContent = `Score : ${correct} / ${total} (${pct} %)`;
        scoreDisplay.classList.remove("good", "mid", "bad");
        if (pct === 100) scoreDisplay.classList.add("good");
        else if (pct >= 50) scoreDisplay.classList.add("mid");
        else scoreDisplay.classList.add("bad");
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      inputs.forEach((input) => {
        input.value = "";
        input.classList.remove("is-correct", "is-wrong");
      });
      if (scoreDisplay) scoreDisplay.textContent = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", renderQuiz);
