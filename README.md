# Christos Academy — Study Portal

A self-contained study portal for *The Christos Experiment: Healing and Health*
(Book C.E. 5, Open Mind Publications, 1973), built as eight sessions matching
your teaching schedule.

No build tools, no server, no database required — it's plain HTML, CSS and
JavaScript, so it runs anywhere you can host static files.

## What's inside

```
christos-academy/
├── index.html        the whole app shell
├── css/styles.css     all styling
├── js/data.js          all course content — edit this to change text
└── js/app.js           site logic (navigation, quizzes, progress, search)
```

## How students use it

- Browse sessions from the sidebar (Overview → Sessions 1–8 → Glossary → Resources).
- Each session has key concepts, key terms, reflection questions, and a short
  self-check quiz (not graded — just for their own understanding).
- Session 1 also includes four real academic case studies with links to the
  original sources, for critical comparison against the book's claims.
- A "Mark session complete" button tracks progress. **This progress is saved
  in each student's own browser only** (via `localStorage`) — there's no
  shared server, so you as the instructor won't see a dashboard of who's
  completed what. If you want that later, it would need a small backend
  (e.g. a lightweight database + login) — happy to help you build that as a
  next step if it'd be useful.

## Deploying it online (pick one — all free)

### Option A: Netlify (drag and drop — easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `christos-academy` folder onto the page.
3. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`).
4. You can rename the site and add a custom domain later from the Netlify dashboard.

### Option B: GitHub Pages
1. Create a new GitHub repository and upload the contents of this folder.
2. In the repo, go to **Settings → Pages**, set the source to your main branch.
3. GitHub gives you a URL like `yourusername.github.io/christos-academy`.

### Option C: Any static host
Since this is plain HTML/CSS/JS with no build step, it also works on Vercel,
Cloudflare Pages, or literally any web host that can serve static files —
just upload the folder as-is.

## Editing the content

Everything text-based lives in **`js/data.js`**. Each session is one object
in the `SESSIONS` array with:

- `concepts` — bullet list of key ideas
- `terms` — glossary entries for that session (feeds the site-wide Glossary page automatically)
- `reflection` — discussion questions
- `quiz` — self-check questions (`correct` is the zero-indexed correct option)
- `caseStudies`, `colourTable`, `activities`, `contentWarning` — optional, only used where relevant

You don't need to touch `app.js` or `styles.css` unless you want to change
how things look or behave — just edit the content in `data.js` and re-upload.

## Personalizing it

Open `js/data.js` and edit the `COURSE` object at the top:
- `instructor` — put your name/contact here
- `welcome`, `howToUse` — adjust the intro copy for your specific class

## A note on scope

This is a **student self-study and review tool**, not a full learning
management system — there's no login, no grading, no instructor dashboard,
and no way to see cross-student data. That's a deliberate simplicity
trade-off so it can be deployed instantly with zero cost and zero backend
maintenance. If your course grows and you want progress tracking across
students, quiz analytics, or assignment submission, that's a very doable
next step, just a different (and slightly more involved) build.
