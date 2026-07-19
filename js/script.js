/* ============================================================
   script.js — logique commune du site MoulouaEdu
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initYear();
  initPdfLists();
  initSearch();
});

/* ---------- Menu mobile ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Année dans le footer ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Construction des listes de PDF ---------- */
function initPdfLists() {
  const containers = document.querySelectorAll("[data-pdf-section]");
  if (!containers.length) return;

  containers.forEach((container) => {
    const niveau = container.dataset.niveau; // college | lycee | universite
    const section = container.dataset.pdfSection; // cours | exercices

    const data =
      (PDF_DATA[niveau] && PDF_DATA[niveau][section]) || [];

    if (!data.length) {
      container.innerHTML = emptyStateHTML(section);
      return;
    }

    container.innerHTML = data
      .map((item) => cardHTML(niveau, section, item))
      .join("");
  });
}

function cardHTML(niveau, section, item) {
  const isQuiz = !!item.quiz;
  const href = isQuiz
    ? `quiz.html?quiz=${encodeURIComponent(item.quiz)}`
    : `pdf/${niveau}/${section}/${encodeURIComponent(item.fichier)}`;
  const icon = isQuiz ? "QCM" : "PDF";
  const linkLabel = isQuiz ? "Faire le QCM" : "Ouvrir";
  const linkTarget = isQuiz ? "" : ` target="_blank" rel="noopener"`;
  return `
    <article class="pdf-card" data-matiere="${escapeHTML(item.matiere || "")}" data-titre="${escapeHTML(item.titre || "").toLowerCase()}">
      <div class="pdf-card__icon" aria-hidden="true">${icon}</div>
      <div class="pdf-card__body">
        <p class="pdf-card__matiere">${escapeHTML(item.matiere || "Général")}</p>
        <h3 class="pdf-card__titre">${escapeHTML(item.titre || item.fichier || "")}</h3>
      </div>
      <a class="pdf-card__link" href="${href}"${linkTarget}>
        ${linkLabel}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </article>`;
}

function emptyStateHTML(section) {
  const label = section === "cours" ? "cours" : "exercices";
  return `
    <div class="empty-state">
      <p>Aucun ${label} n'a encore été ajouté ici.</p>
      <p class="empty-state__hint">Ajoute un PDF dans le dossier correspondant et déclare-le dans <code>js/pdf-data.js</code>.</p>
    </div>`;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Barre de recherche / filtre ---------- */
function initSearch() {
  const input = document.querySelector(".search-input");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(".pdf-card").forEach((card) => {
      const titre = card.dataset.titre || "";
      const matiere = (card.dataset.matiere || "").toLowerCase();
      const match = titre.includes(q) || matiere.includes(q);
      card.style.display = match ? "" : "none";
    });
  });
}
