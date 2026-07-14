/* ============================================================
   CHRISTOS ACADEMY — App logic
   Vanilla JS, no build step. Reads content from js/data.js.
   Progress is stored in this browser only (localStorage) —
   there is no shared server, so progress won't sync across
   devices or between students and instructor.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "christos-academy-progress-v1";
  const mainEl = document.getElementById("main-content");
  const tocListEl = document.getElementById("toc-list");
  const progressFillEl = document.getElementById("progress-fill");
  const progressLabelEl = document.getElementById("progress-label");

  /* ---------------- Progress storage ---------------- */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
  let progress = loadProgress();

  function isDone(sessionId) {
    return !!progress[sessionId];
  }
  function toggleDone(sessionId) {
    progress[sessionId] = !progress[sessionId];
    saveProgress(progress);
    renderSidebar();
    updateProgressBar();
  }

  function updateProgressBar() {
    const total = SESSIONS.length;
    const done = SESSIONS.filter((s) => isDone(s.id)).length;
    const pct = Math.round((done / total) * 100);
    progressFillEl.style.width = pct + "%";
    progressLabelEl.textContent = done + " / " + total + " sessions complete";
  }

  /* ---------------- Sidebar / nav ---------------- */
  function renderSidebar() {
    let html = "";
    html += navItem("overview", "\u2014", "Overview");
    html += `<hr class="toc-divider">`;
    SESSIONS.forEach((s) => {
      html += navItem("session-" + s.id, String(s.number).padStart(2, "0"), s.title, isDone(s.id));
    });
    html += `<hr class="toc-divider">`;
    html += navItem("glossary", "\u2014", "Glossary");
    html += navItem("resources", "\u2014", "Resources & Bibliography");
    tocListEl.innerHTML = html;

    tocListEl.querySelectorAll(".toc-link").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigate(el.dataset.page);
      });
    });
    highlightActive();
  }

  function navItem(pageId, num, label, done) {
    return `<li><a href="#${pageId}" class="toc-link${done ? " done" : ""}" data-page="${pageId}">
      <span class="num">${num}</span><span>${label}</span>
      <span class="check">\u2713</span>
    </a></li>`;
  }

  function highlightActive() {
    const current = getCurrentPage();
    tocListEl.querySelectorAll(".toc-link").forEach((el) => {
      el.classList.toggle("active", el.dataset.page === current);
    });
  }

  /* ---------------- Routing ---------------- */
  function getCurrentPage() {
    return (location.hash || "#overview").replace("#", "");
  }
  function navigate(pageId) {
    location.hash = pageId;
  }
  window.addEventListener("hashchange", render);

  /* ---------------- Render dispatcher ---------------- */
  function render() {
    const page = getCurrentPage();
    if (page === "overview") renderOverview();
    else if (page === "glossary") renderGlossary();
    else if (page === "resources") renderResources();
    else if (page.startsWith("session-")) {
      const id = parseInt(page.replace("session-", ""), 10);
      const session = SESSIONS.find((s) => s.id === id);
      if (session) renderSession(session);
      else renderOverview();
    } else {
      renderOverview();
    }
    highlightActive();
    window.scrollTo({ top: 0, behavior: "auto" });
    // On small screens, collapse the table of contents after navigating.
    const tocNav = document.getElementById("toc-nav");
    if (window.innerWidth <= 880 && tocNav) tocNav.classList.add("collapsed");
  }

  /* ---------------- Overview page ---------------- */
  function renderOverview() {
    let cards = SESSIONS.map((s) => {
      const done = isDone(s.id);
      return `<button class="session-card" data-page="session-${s.id}">
        <span class="n">SESSION ${String(s.number).padStart(2, "0")} \u00B7 PAGES ${s.pages}</span>
        <h3>${s.title}</h3>
        <div class="covers">${s.covers}</div>
        <div class="status">${done ? "\u2713 Complete" : "Not started"}</div>
      </button>`;
    }).join("");

    mainEl.innerHTML = `
      <div class="hero">
        <span class="eyebrow">Study Portal</span>
        <h1>${COURSE.title}</h1>
        <div class="book-meta">${COURSE.bookMeta}</div>
        <p class="lede">${COURSE.welcome}</p>
      </div>

      <h2 class="block-title">How to use this portal</h2>
      <ol class="how-to-list">
        ${COURSE.howToUse.map((t) => `<li>${t}</li>`).join("")}
      </ol>

      <h2 class="block-title">Sessions</h2>
      <div class="session-cards">${cards}</div>
    `;

    mainEl.querySelectorAll(".session-card").forEach((el) => {
      el.addEventListener("click", () => navigate(el.dataset.page));
    });
  }

  /* ---------------- Session page ---------------- */
  function renderSession(s) {
    const idx = SESSIONS.findIndex((x) => x.id === s.id);
    const prev = SESSIONS[idx - 1];
    const next = SESSIONS[idx + 1];
    const done = isDone(s.id);

    let html = `
      <div class="page-plate">\u2012 ${s.pages} \u2012</div>
      <div class="page-card">
        <div class="session-covers">${s.covers}</div>
        <span class="session-pages">Session ${s.number}</span>
        <h1 class="session-title">${s.title}</h1>
        <p class="intro-text">${s.intro}</p>
    `;

    if (s.contentWarning) {
      html += `<div class="warning-box"><span class="label">A note before you begin</span>${s.contentWarning}</div>`;
    }
    if (s.contentNote) {
      html += `<div class="warning-box"><span class="label">Context note</span>${s.contentNote}</div>`;
    }

    if (s.sections && s.sections.length) {
      html += `<h2 class="block-title">In-depth notes</h2>`;
      html += s.sections.map((sec) => `
        <div class="section-block">
          <h3 class="section-heading">${sec.heading}</h3>
          <p class="section-body">${sec.body}</p>
        </div>
      `).join("");
    }

    if (s.keyLists && s.keyLists.length) {
      html += s.keyLists.map((kl) => {
        const tag = kl.ordered ? "ol" : "ul";
        return `<div class="keylist-box">
          <div class="keylist-title">${kl.title}</div>
          <${tag} class="keylist-items">${kl.items.map((it) => `<li>${it}</li>`).join("")}</${tag}>
        </div>`;
      }).join("");
    }

    if (s.terms && s.terms.length) {
      html += `<h2 class="block-title">Key terms</h2><div class="term-grid">`;
      html += s.terms.map((t) => `<div class="term-card"><div class="term-name">${t.term}</div><div class="term-def">${t.def}</div></div>`).join("");
      html += `</div>`;
    }

    if (s.colourTable) {
      html += `<h2 class="block-title">Colour &amp; chakra reference</h2>
      <table class="colour-table">
        <thead><tr><th>Colour</th><th>Chakra</th><th>Associated quality</th></tr></thead>
        <tbody>${s.colourTable.map((r) => `<tr><td>${r.colour}</td><td>${r.chakra}</td><td>${r.quality}</td></tr>`).join("")}</tbody>
      </table>`;
    }

    if (s.caseStudies) {
      html += `<h2 class="block-title">Real-world case studies</h2>`;
      html += s.caseStudies.map((c) => `
        <div class="case-study">
          <h3>${c.title}</h3>
          <span class="source">${c.source}</span>
          <p>${c.summary}</p>
          <p class="note">${c.note}</p>
          ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">Read the source \u2197</a>` : ""}
        </div>
      `).join("");
    }

    if (s.activities) {
      html += `<h2 class="block-title">Suggested activities</h2><ul class="concept-list">`;
      html += s.activities.map((a) => `<li>${a}</li>`).join("");
      html += `</ul>`;
    }

    html += `<h2 class="block-title">Reflection questions</h2><ol class="reflection-list">`;
    html += s.reflection.map((r) => `<li>${r}</li>`).join("");
    html += `</ol>`;

    if (s.quiz && s.quiz.length) {
      html += `<h2 class="block-title">Self-check quiz</h2>
      <p style="color:var(--slate); font-size:0.92rem;">Not graded \u2014 just for you, to check your understanding.</p>
      <div class="quiz-block" id="quiz-${s.id}">`;
      html += s.quiz.map((q, qi) => renderQuizQuestion(s.id, qi, q)).join("");
      html += `<div class="quiz-score" id="quiz-score-${s.id}" style="display:none;"></div>`;
      html += `</div>`;
    }

    html += `
      <div class="session-actions">
        <button class="btn ${done ? "done" : "secondary"}" id="mark-done-btn">
          ${done ? "\u2713 Marked complete" : "Mark session complete"}
        </button>
        <div style="display:flex; gap:0.6rem;">
          ${prev ? `<button class="btn secondary" data-page="session-${prev.id}">\u2190 Session ${prev.number}</button>` : ""}
          ${next ? `<button class="btn secondary" data-page="session-${next.id}">Session ${next.number} \u2192</button>` : `<button class="btn secondary" data-page="glossary">Glossary \u2192</button>`}
        </div>
      </div>
      </div>
    `;

    mainEl.innerHTML = html;

    document.getElementById("mark-done-btn").addEventListener("click", () => {
      toggleDone(s.id);
      renderSession(s);
    });
    mainEl.querySelectorAll("[data-page]").forEach((el) => {
      if (el.id !== "mark-done-btn") {
        el.addEventListener("click", () => navigate(el.dataset.page));
      }
    });

    wireQuiz(s);
  }

  function renderQuizQuestion(sessionId, qIndex, q) {
    const optionsHtml = q.options
      .map(
        (opt, oi) =>
          `<button class="quiz-option" data-q="${qIndex}" data-o="${oi}">${String.fromCharCode(65 + oi)}. ${opt}</button>`
      )
      .join("");
    return `
      <div class="quiz-q" data-question="${qIndex}">
        <div class="q-text">${qIndex + 1}. ${q.q}</div>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explain" data-explain="${qIndex}">${q.explain}</div>
      </div>
    `;
  }

  function wireQuiz(s) {
    if (!s.quiz || !s.quiz.length) return;
    const container = document.getElementById("quiz-" + s.id);
    const scoreEl = document.getElementById("quiz-score-" + s.id);
    const answered = {};
    let correctCount = 0;

    container.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = parseInt(btn.dataset.q, 10);
        if (answered[qi] !== undefined) return; // already answered
        const question = s.quiz[qi];
        const chosen = parseInt(btn.dataset.o, 10);
        answered[qi] = chosen;

        const group = container.querySelector('.quiz-q[data-question="' + qi + '"]');
        group.querySelectorAll(".quiz-option").forEach((optBtn) => {
          optBtn.disabled = true;
          const oi = parseInt(optBtn.dataset.o, 10);
          if (oi === question.correct) optBtn.classList.add("correct");
          else if (oi === chosen) optBtn.classList.add("incorrect");
        });
        group.querySelector(".quiz-explain").classList.add("show");

        if (chosen === question.correct) correctCount++;

        if (Object.keys(answered).length === s.quiz.length) {
          scoreEl.style.display = "block";
          scoreEl.textContent = "You scored " + correctCount + " / " + s.quiz.length + " on this self-check.";
        }
      });
    });
  }

  /* ---------------- Glossary page ---------------- */
  function buildGlossary() {
    const all = [];
    SESSIONS.forEach((s) => {
      (s.terms || []).forEach((t) => all.push({ ...t, session: s.number }));
    });
    all.sort((a, b) => a.term.localeCompare(b.term));
    return all;
  }

  function renderGlossary() {
    const all = buildGlossary();
    mainEl.innerHTML = `
      <div class="page-plate">\u2012 Glossary \u2012</div>
      <div class="page-card">
        <h1 class="session-title">Glossary of key terms</h1>
        <p class="intro-text">Every term introduced across all eight sessions, in one place. Search to filter.</p>
        <input class="glossary-search" id="glossary-search" type="search" placeholder="Search terms\u2026" />
        <div class="term-grid" id="glossary-results"></div>
      </div>
    `;
    const resultsEl = document.getElementById("glossary-results");
    const searchEl = document.getElementById("glossary-search");

    function paint(list) {
      resultsEl.innerHTML = list
        .map(
          (t) =>
            `<div class="term-card"><div class="term-name">${t.term} <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--brass);">S${t.session}</span></div><div class="term-def">${t.def}</div></div>`
        )
        .join("") || `<p style="color:var(--slate);">No terms match your search.</p>`;
    }
    paint(all);

    searchEl.addEventListener("input", () => {
      const q = searchEl.value.trim().toLowerCase();
      const filtered = all.filter(
        (t) => t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q)
      );
      paint(filtered);
    });
  }

  /* ---------------- Resources page ---------------- */
  function renderResources() {
    const caseStudies = SESSIONS.find((s) => s.caseStudies)?.caseStudies || [];
    mainEl.innerHTML = `
      <div class="page-plate">\u2012 Resources \u2012</div>
      <div class="page-card">
        <h1 class="session-title">Resources &amp; Bibliography</h1>
        <p class="intro-text">The original bibliography from the book, followed by real, checkable research referenced across this course for further reading.</p>

        <h2 class="block-title">Further reading: the real research</h2>
        ${caseStudies
          .map(
            (c) => `<div class="case-study">
              <h3>${c.title}</h3>
              <span class="source">${c.source}</span>
              <p>${c.summary}</p>
              ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">Read the source \u2197</a>` : ""}
            </div>`
          )
          .join("")}

        <h2 class="block-title">Original bibliography (1973)</h2>
        <ul class="biblio-list">
          ${BIBLIOGRAPHY.map((b) => `<li><span class="b-title">${b.title}</span><span class="b-author">${b.author}</span></li>`).join("")}
        </ul>
      </div>
    `;
  }

  /* ---------------- Mobile toggle ---------------- */
  function wireMobileToggle() {
    const btn = document.getElementById("mobile-toggle");
    const nav = document.getElementById("toc-nav");
    if (!btn) return;
    btn.addEventListener("click", () => {
      nav.classList.toggle("collapsed");
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    updateProgressBar();
    wireMobileToggle();
    render();
  });
})();
