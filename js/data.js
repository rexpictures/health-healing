/* ============================================================
   CHRISTOS ACADEMY — Course Data
   Study portal content derived from "The Christos Experiment:
   Healing and Health" (Book C.E. 5, Open Mind Publications, 1973)

   Edit this file to update course content. Each session object
   drives the whole site — nav, page content, glossary, quizzes.
   ============================================================ */

const COURSE = {
  title: "Christos Academy",
  subtitle: "A Study Portal for The Christos Experiment: Healing and Health",
  bookMeta: "Book C.E. 5 · Compiled by Jacqueline Parkhurst · Open Mind Publications, 1973",
  instructor: "Your Instructor", // <-- personalize this
  welcome: `This portal walks through eight sessions of study on "The Christos Experiment: Healing and Health," a 1973 esoteric text blending occult teaching, alternative medicine, and Jungian psychology. Each session includes the core concepts, key terms, reflection questions, and a short self-check quiz. Work through them in order — later sessions build on earlier ones.`,
  howToUse: [
    "Read the key concepts and key terms for the session before your class meeting.",
    "Sit with the reflection questions — there are no single right answers, they're meant to be discussed.",
    "Take the self-check quiz at the end of each session to confirm your understanding of the material (not a graded test — just for you).",
    "Mark a session complete when you're done. Your progress is saved in this browser only."
  ]
};

const SESSIONS = [
  {
    id: 1,
    number: 1,
    pages: "1–8",
    title: "Foundations: The Cell-Mind and Early Healing Models",
    covers: "Introduction · Contacting the Cell \u201CMinds\u201D · Pranic Healing · Mental Healing",
    intro: "The book opens by arguing that fragmented, single-lens healthcare — treating only the body, or only the mind, in isolation — cannot produce real health. It then introduces its central biological claim: that the body's cells behave as if organised by their own subordinate intelligence, and that this \u201Ccell-mind\u201D can be addressed directly through energy (pranic healing) or thought (mental healing).",
    concepts: [
      "Modern life produces stresses affecting people at levels beyond the purely physical; true health requires looking at the whole person \u2014 physical, emotional, mental, and spiritual.",
      "Most healing systems (medical, naturopathic, psychological) tend to address only one layer of the person, often in isolation from the others.",
      "The body's cells are described as having a kind of built-in intelligence, organised into \u201Ccommunities,\u201D governed by an involuntary or instinctive consciousness distinct from ordinary conscious thought.",
      "Pranic healing: transferring vital force (prana) into a patient, often via the hands, to stimulate sluggish cells and restore normal activity. Also called Magnetic Healing.",
      "Mental healing: using visualisation and directed thought to communicate with the \u201Ccell-mind\u201D and re-establish correct function. Includes suggestion (spoken, in-person) and absent/distance healing (no physical presence required)."
    ],
    terms: [
      { term: "Prana", def: "Vital or life force, said to be drawn from air, food, water, and sunlight, and absorbed via the spleen chakra." },
      { term: "Etheric body", def: "The energy template underlying the physical body, through which prana is distributed." },
      { term: "Cell-mind / instinctive consciousness", def: "The idea that groups of cells operate with a subordinate 'intelligence,' obedient to the body's involuntary consciousness." },
      { term: "Absent healing", def: "Mental or psychic healing performed without the patient physically present, said by the text to sometimes work better than in-person healing." },
      { term: "Suggestion", def: "Verbal, in-person healing method using a mental picture the healer holds and communicates to the patient." }
    ],
    caseStudies: [
      {
        title: "Bioelectric \u201Ccollective intelligence\u201D of cells",
        source: "Michael Levin, Tufts University \u2014 published in Cell, Science Advances, Trends in Molecular Medicine",
        summary: "Levin's lab has shown that all cells (not just neurons) generate and detect electrical signals that coordinate collective behaviour \u2014 a 'cognitive glue' binding cells into a kind of collective intelligence. This has enabled regrowing amputated frog limbs and inducing fully-formed eyes to grow on other parts of a frog's body, purely by altering local bioelectric states.",
        note: "A real, peer-reviewed, measurable mechanism (voltage across cell membranes) \u2014 not the same claim as 'prana,' but a genuine scientific parallel to the idea of coordinated cell intelligence.",
        link: "https://en.wikipedia.org/wiki/Michael_Levin_(biologist)"
      },
      {
        title: "The Emily Rosa Therapeutic Touch test",
        source: "Rosa, Rosa, Sarner & Barrett \u2014 JAMA, 1998",
        summary: "Eleven-year-old Emily Rosa tested 21 Therapeutic Touch practitioners' ability to detect her hand's location above their own, through a screen. Their average accuracy was 44% \u2014 below what chance alone (50%) would predict.",
        note: "A famous, rigorously designed (if later debated) test of a pranic-healing-adjacent claim. Worth discussing what it does and doesn't prove.",
        link: "https://jamanetwork.com/journals/jama/fullarticle/187390"
      },
      {
        title: "Systematic review of distant healing",
        source: "Astin, Harkness & Ernst \u2014 Annals of Internal Medicine, 2000",
        summary: "A review of 23 randomized trials (2,774 patients) on prayer, mental healing, Therapeutic Touch, and other distant healing methods found that roughly 57% of trials showed a positive effect \u2014 but study quality varied too much to draw firm conclusions.",
        note: "A genuinely mixed result \u2014 useful for discussing publication bias and study quality rather than a simple yes/no verdict.",
        link: "https://www.acpjournals.org/doi/10.7326/0003-4819-132-11-200006060-00009"
      },
      {
        title: "Open-label placebo research",
        source: "Kaptchuk et al., Harvard / Beth Israel Deaconess \u2014 PLoS One 2010, Pain 2021",
        summary: "Patients with IBS who were openly told they were taking a placebo (no deception) still showed significantly greater symptom improvement than patients given no treatment \u2014 and later research found open-label placebo works about as well as a deceptive one.",
        note: "Solid, replicated evidence that expectation and the therapeutic relationship can produce real symptom change \u2014 a different mechanism than the book proposes, but real nonetheless.",
        link: "https://pubmed.ncbi.nlm.nih.gov/21203519/"
      }
    ],
    reflection: [
      "Why might treating a person \u201Cin fragments\u201D fail to produce lasting health, according to the text?",
      "What is the proposed relationship between conscious thought and the cells of the body?",
      "How does pranic healing differ from mental healing in method, even though both aim at the same outcome?",
      "Which of the four real-world case studies above most changes how you'd evaluate the book's specific claims \u2014 and why?"
    ],
    quiz: [
      {
        q: "According to the text, what is the main problem with most healing approaches available in the 1970s?",
        options: ["They were all too expensive", "They each addressed only one layer of the person, in isolation", "They relied too heavily on drugs", "They ignored the physical body entirely"],
        correct: 1,
        explain: "The book's central critique is fragmentation \u2014 doctors, naturopaths, and psychologists each address one layer without communicating with each other."
      },
      {
        q: "What is prana said to be, in this text?",
        options: ["A type of tissue salt", "A vital or life force drawn from air, food, water and sunlight", "An acupuncture meridian", "A form of hypnosis"],
        correct: 1,
        explain: "Prana is the Yogic term for vital force used throughout the pranic healing section."
      },
      {
        q: "What did Emily Rosa's 1998 JAMA study test?",
        options: ["Whether acupuncture reduces pain", "Whether tissue salts cure deficiency diseases", "Whether Therapeutic Touch practitioners could detect a hand's location above their own", "Whether colour therapy affects blood pressure"],
        correct: 2,
        explain: "Practitioners were tested, through a screen, on detecting which of their own hands Rosa's hand was hovering above."
      },
      {
        q: "What did the Astin, Harkness & Ernst (2000) systematic review conclude about distant healing?",
        options: ["It has no effect whatsoever", "It definitely works and should replace medicine", "Roughly 57% of trials showed a positive effect, but study quality made firm conclusions difficult", "It only works for children"],
        correct: 2,
        explain: "The review found a genuinely mixed, inconclusive picture rather than a clean yes or no."
      },
      {
        q: "What made the Kaptchuk open-label placebo studies notable?",
        options: ["They used only children as participants", "Patients improved even when openly told the pill was inactive", "They proved prana is real", "They were conducted entirely by mail"],
        correct: 1,
        explain: "The surprising finding was that deception isn't required for a placebo to produce measurable symptom improvement."
      }
    ]
  },

  {
    id: 2,
    number: 2,
    pages: "6–19",
    title: "Spiritual Healing & Naturopathy",
    covers: "Metaphysical and Spiritual Healing · Naturopathic Healing · Biochemic Tissue Salts · Radiesthesia · The Four Etheric Body Types",
    intro: "This session covers the idea of healing through a 'higher' consciousness (Soul or Higher Self) acting on the 'lower' bodies, alongside naturopathy's drug-free, diet-and-vitality-based system, and a set of diagnostic frameworks (tissue salts, radiesthesia, etheric body typing) used to individualise treatment.",
    concepts: [
      "Metaphysical/spiritual healing: the Soul or Higher Self directing energy down into the physical, emotional and mental bodies to produce healing \u2014 either through a healer or through the patient's own inner development.",
      "Visualisation is presented as central to healing \u2014 picturing the patient's wholeness, not just symptom relief.",
      "A 1954 British Medical Journal-style review of about 100 spiritual healing cases found very limited hard evidence of cure, though a handful of cases showed genuine improvement \u2014 used to argue for blending medicine and metaphysics rather than relying on either alone.",
      "Naturopathy: a drug-free approach built around diet, fasting, hydrotherapy, and stimulating the body's own vital force. Disease is said to progress through three stages: lowered vitality, abnormal blood/lymph composition, then cellular toxicity.",
      "Naturopathy treats symptoms as the body's own attempt at self-cleansing rather than something to suppress.",
      "Biochemic tissue salts: 12 mineral salts (e.g. Calc Fluor, Ferrum Phos, Kali Mur), each linked to specific deficiency symptoms.",
      "Radiesthesia: pendulum or machine-based diagnosis, described as a form of psychometry dependent on the operator's skill.",
      "Four (plus a refined fifth) etheric body types \u2014 heavy, fluid, nervously active, bland, and a more evolved fifth type \u2014 each with characteristic health vulnerabilities."
    ],
    terms: [
      { term: "Healing crisis vs. disease crisis", def: "Naturopathy's model of the body's healing forces temporarily 'winning' against accumulated toxins, producing visible symptoms." },
      { term: "Mono diet", def: "Eating only one food type for a period of time, to ease digestion and maximise nutrient absorption." },
      { term: "Trituration", def: "The process of preparing tissue salts by crushing and diluting them into an absorbable form." },
      { term: "Iris diagnosis", def: "Reading patterns and colourings in the iris of the eye to infer bodily disorders." },
      { term: "Radionics", def: "The modern name given in the text to machine-assisted radiesthesia, using electric current to detect disease." }
    ],
    reflection: [
      "What does the text suggest is the real goal of spiritual healing \u2014 cure, or something broader?",
      "Why does naturopathy consider suppressing symptoms (e.g. with skin creams) potentially counterproductive?",
      "Pick one etheric body type \u2014 what health issues is it said to be prone to, and why?",
      "The 1954 case review found very mixed evidence. Does the book treat this as a defeat for spiritual healing, or as an argument for something else?"
    ],
    quiz: [
      {
        q: "In the naturopathic model, what is the 'healing crisis'?",
        options: ["A medical emergency requiring hospitalisation", "The body's healing forces temporarily overcoming accumulated toxins, producing visible symptoms", "A permanent state of illness", "A crisis of faith in the patient"],
        correct: 1,
        explain: "It's framed positively \u2014 a sign the body is winning against toxin buildup, not a setback."
      },
      {
        q: "How many basic biochemic tissue salts does the text describe?",
        options: ["4", "7", "12", "20"],
        correct: 2,
        explain: "Twelve tissue salts are described, each linked to specific deficiency symptoms."
      },
      {
        q: "What did the 1954 case review of ~100 spiritual healing cases find?",
        options: ["All cases were fully cured", "Very limited hard evidence overall, though a handful showed real improvement", "No records existed for any case", "Every case was fraudulent"],
        correct: 1,
        explain: "The review found the evidence thin and hard to confirm in most cases, with occasional genuine improvement."
      },
      {
        q: "Which etheric body type is described as usually intellectual and emotionally sensitive, but not very common?",
        options: ["The heavy type", "The fluid type", "The nervously active type", "The bland type"],
        correct: 3,
        explain: "The bland type is described this way in the text, and noted as relatively rare."
      }
    ]
  },

  {
    id: 3,
    number: 3,
    pages: "21–32",
    title: "Colour Healing & Acupuncture",
    covers: "Colour Healing · The Meaning of Colours · Acupuncture and Chinese Medicine",
    intro: "This session traces colour's historical and symbolic use in healing, walks through a full colour/chakra correspondence system, and introduces the core concepts of Chinese medicine \u2014 Yin/Yang balance, meridians, and pulse-based diagnosis \u2014 that underpin acupuncture.",
    concepts: [
      "Colour has been used symbolically and medicinally across ancient cultures (Egyptian, Greek, Islamic); some historical 'colour cures' (e.g. purple dye from murex shells) likely worked due to chemical properties, not the colour itself \u2014 a caution the text itself raises.",
      "Edwin Babbitt's 19th-century colour therapy theories (red = stimulating, blue = cooling/antiseptic) are presented alongside J.D. Hessey's system linking specific colours to specific chakras and ailments.",
      "Each spectrum colour is linked to a chakra, a set of metals, and associated diseases/deficiencies.",
      "Practical colour-healing methods described: solarised water/food, coloured light exposure, and 'colour breathing' (visualising colour entering with each breath).",
      "Chinese medicine: rooted in the idea that a person is a universe in miniature, governed by the same laws as the cosmos. Central to this is Yin and Yang \u2014 complementary opposing forces that must stay balanced for health.",
      "Acupuncture: based on 12 paired meridians (6 Yang, 6 Yin); the pulse (14 distinct pulses across both wrists) is used diagnostically; fine needles (or heat, via moxibustion) correct imbalances at specific points."
    ],
    terms: [
      { term: "Chromo Lens", def: "Babbitt's device \u2014 a coloured glass flask of water hung in sunlight \u2014 for 'charging' water with colour for drinking." },
      { term: "Meridian", def: "An energetic pathway connecting acupuncture points, said to carry the circulation of life energy through the body." },
      { term: "Tonification vs. sedation points", def: "Acupuncture points said to stimulate (tonify) or calm (sedate) the body's energy." },
      { term: "Moxa / moxibustion", def: "Applying heat (burning powdered mugwort) to acupuncture points instead of needles." },
      { term: "Yin and Yang", def: "Complementary opposing forces \u2014 feminine/passive vs. masculine/active \u2014 whose balance the Chinese medical system aims to maintain." }
    ],
    colourTable: [
      { colour: "Red", chakra: "Base of spine", quality: "Energy and vitality; useful for sluggish conditions" },
      { colour: "Orange", chakra: "Spleen", quality: "Relieves repression; aids assimilation and circulation" },
      { colour: "Yellow", chakra: "Solar plexus", quality: "Aids intellect and digestion; purifies the system" },
      { colour: "Green", chakra: "Heart", quality: "Harmony and relaxation; used for blood pressure issues" },
      { colour: "Blue", chakra: "Throat", quality: "Spirituality, truth; used for throat and inflammatory conditions" },
      { colour: "Indigo", chakra: "Brow (Pineal)", quality: "Purifies bloodstream; cooling and astringent" },
      { colour: "Violet", chakra: "Crown", quality: "Stimulates intuition; used for neurosis and insomnia" }
    ],
    reflection: [
      "Why does the author caution that not all 'colour cures' throughout history were really about colour?",
      "How does the Yin/Yang model map loosely onto the sympathetic/parasympathetic nervous system, per the text?",
      "What role does the pulse play in traditional Chinese diagnosis, and how is that different from a Western pulse check?",
      "Acupuncture is more mainstream and researched today than most other methods in this book. What might account for that?"
    ],
    quiz: [
      {
        q: "According to the text, why did purple dye from murex shells actually help heal wounds historically?",
        options: ["Because purple is a spiritually powerful colour", "Because of the dye's chemical properties (calcium oxide), not its colour", "It didn't actually work at all", "Because it was blessed by priests"],
        correct: 1,
        explain: "The text itself flags this as a case where the real mechanism was chemical, not the colour."
      },
      {
        q: "Which chakra is linked to the colour Green in the text's system?",
        options: ["Throat", "Solar plexus", "Heart", "Crown"],
        correct: 2,
        explain: "Green is linked to the Heart chakra and associated with harmony, relaxation, and blood pressure regulation."
      },
      {
        q: "How many paired meridians does the text describe in Chinese medicine?",
        options: ["6", "10", "12", "14"],
        correct: 2,
        explain: "Twelve paired meridians are described \u2014 6 Yang and 6 Yin \u2014 placed symmetrically on either side of the body."
      },
      {
        q: "What is moxibustion?",
        options: ["A form of pulse diagnosis", "Applying heat via burning mugwort to acupuncture points instead of needles", "A type of coloured light therapy", "A meditation technique"],
        correct: 1,
        explain: "Moxibustion is presented as an alternative to needling, especially favoured for children, the elderly, and thin/weak patients."
      }
    ]
  },

  {
    id: 4,
    number: 4,
    pages: "33–52",
    title: "Health According to Evolvement",
    covers: "Health According to Evolvement · The Subtle Bodies and Their Effects Upon Disease",
    contentWarning: "This session includes the text's historical theories linking specific diseases (including cancer) to psychological causes. These are presented as one 1973 metaphysical belief system, not medical fact or guidance. If this material feels heavy, it's okay to engage with it at a distance \u2014 as a historical framework to understand and critique, not as truth about any real person's illness.",
    intro: "This is the most conceptually dense chapter in the book. It sets out a causal theory of disease \u2014 rooted in karma and the subtle (etheric/astral) bodies \u2014 and applies it to three historically 'inherited' disease groups, the spine, and a detailed map of organ-to-emotion correspondences.",
    concepts: [
      "Central claim: disease originates largely (the text says ~90%) in the etheric and astral (emotional) bodies, not purely the physical \u2014 and ultimately traces back to the 'misuse of force' in this life or a past one.",
      "Disease is framed as having multiple sources: personal karma, inherited human-wide susceptibilities, and even 'planetary karma.'",
      "Six principles are laid out for why disease shouldn't simply be seen as a failure to avoid at all costs \u2014 including that physical death isn't necessarily a disaster, and suffering may serve a larger evolutionary/purificatory function.",
      "Three historically 'inherited' major disease groups are discussed through this lens: tuberculosis (linked to depletion, an emotional-to-mental shift in humanity), syphilitic disease (linked to over-expression of sexual/life-force energy), and cancer (linked to repression \u2014 inability to fulfil purpose).",
      "The spine is described symbolically as 'the body' \u2014 a channel for subtle energy as well as physical support; spinal problems are linked to inability to 'stand up to' life circumstances.",
      "Detailed correspondences are given between specific organs (throat, ears, kidneys, liver, lungs) and specific psychological/emotional patterns.",
      "The astral (emotional) body is described as usually the strongest influence on health for most people, even though the physical body is where illness becomes visible."
    ],
    terms: [
      { term: "Karma", def: "The law of cause and effect across lifetimes; a key proposed cause of individual disease in this text." },
      { term: "Astral body", def: "The emotional/desire body, described as usually the dominant influence on a person's health." },
      { term: "\u201CDisease of the Mystics\u201D", def: "Disorders specifically associated with spiritual/psychic development outpacing the body's capacity to cope." },
      { term: "Psychic infection", def: "The idea that emotional or mental disturbance can spread through groups, like a contagion \u2014 the text cites 1930s Germany as an example." }
    ],
    reflection: [
      "According to the text, why might a naturopathic diet alone fail to resolve a health issue rooted in the astral body?",
      "What is the proposed metaphysical explanation for why cancer and syphilitic disease are described as almost opposite in origin?",
      "Choose one organ-emotion correspondence from the text and explain the reasoning given for it in your own words.",
      "How would you critically respond to a framework that links specific diseases to specific psychological 'failures'? What's useful about mind-body thinking, and what's risky about taking it too literally?"
    ],
    quiz: [
      {
        q: "According to the text, roughly what percentage of disease originates in the etheric and astral bodies?",
        options: ["10%", "50%", "90%", "100%"],
        correct: 2,
        explain: "The text states that around 90% of disease originates in the etheric and astral bodies rather than the purely physical."
      },
      {
        q: "What does the text link tuberculosis to, historically?",
        options: ["Over-expression of sexual energy", "Depletion, tied to an emotional-to-mental shift in humanity", "Repression of creative purpose", "Planetary karma alone"],
        correct: 1,
        explain: "TB is framed as a disease of depletion connected to humanity's historical shift away from a primarily emotional orientation."
      },
      {
        q: "What does the text symbolically call the spine?",
        options: ["The Soul's mirror", "\u201CThe body\u201D itself, and a channel for subtle energy", "The seat of karma", "The astral gateway"],
        correct: 1,
        explain: "The spine is described as the major supporter of the body and central to both physical posture and subtle energy flow."
      }
    ]
  },

  {
    id: 5,
    number: 5,
    pages: "53–60",
    title: "Healing and Healers & Transmutation of the Cells",
    covers: "Healing and Healers · Transmutation of the Cells",
    intro: "This session sets out what the text considers necessary for legitimate healing to occur, introduces healing angels/Devas and a future theory of sound-healing, and closes the metaphysical half of the book with a five-stage theory of cellular transmutation into a 'superhuman' state.",
    concepts: [
      "A checklist is given for what true healing requires: recognising cause-and-effect, discerning whether a cure is even destined to happen, correct diagnosis, compatibility between healer and patient at a subtle level, willing patient cooperation, and patient willingness to change contributing behaviours/attitudes.",
      "A good healer should understand the patient's subtle-body condition and 'ray' (a metaphysical typing system) \u2014 and where lacking full skill, should simply act as a channel for love/energy rather than attempting more than they're capable of.",
      "Healing 'angels'/Devas are described as a cooperative force healers can invoke, said to remain active for up to 24 hours after being called upon.",
      "Sound and music healing is discussed as a future science, not yet developed \u2014 the text argues no composer has yet been 'called' to write specifically healing-oriented music.",
      "Transmutation of the cells: the idea that highly evolved individuals can physically transform their cellular structure into a 'superhuman' pattern via sustained purification of body, mind, and emotion.",
      "Five proposed stages of transmutation: physical purification \u2192 slowed ageing \u2192 disease resistance \u2192 cellular 'peeling' (old matter replaced by new) \u2192 full physical/organ transformation."
    ],
    terms: [
      { term: "Devas", def: "Angelic beings associated with the healing hierarchy in this metaphysical system." },
      { term: "Ray", def: "One of seven fundamental 'types' of energy said to characterise an individual, group, or era." },
      { term: "Tonal value", def: "A person's individual vibrational 'note,' used hypothetically to match compatible healers or music." },
      { term: "Translation / transmutation / resurrection / ascension", def: "Related terms for advanced physical-spiritual transformation described in the text." }
    ],
    reflection: [
      "Why does the text argue that a cure isn't always the right or even possible goal of healing?",
      "What does the author mean by suggesting composers haven't yet been 'appointed' to write healing music \u2014 what would need to change for this to happen?",
      "Which of the five stages of transmutation seems most testable or observable, and which seems the most speculative? Why?"
    ],
    quiz: [
      {
        q: "According to the text's checklist, what should a healer do if they lack the full skill or insight to fully heal a patient?",
        options: ["Refuse to help at all", "Simply act as a channel for love/energy rather than attempting more than they can", "Guess at a diagnosis anyway", "Refer the patient only to orthodox medicine"],
        correct: 1,
        explain: "The text says the fallback for a less skilled healer is simply to act as a channel, which it says occurs 'in many cases of healing.'"
      },
      {
        q: "How long does the text say healing Devas remain active after being invoked?",
        options: ["1 hour", "24 hours", "7 days", "Indefinitely"],
        correct: 1,
        explain: "The text states healing angels/Devas continue to be active for up to 24 hours after invocation."
      },
      {
        q: "What is the final (5th) stage of the proposed cellular transmutation process?",
        options: ["Slowed ageing", "Disease resistance", "Actual physical organ change, moving beyond 'normal human' needs", "Cellular peeling"],
        correct: 2,
        explain: "The fifth and final stage described is full physical organ transformation into a 'superhuman' body pattern."
      }
    ]
  },

  {
    id: 6,
    number: 6,
    pages: "61–69",
    title: "Psychological Alignment and Transmutation by the Self",
    covers: "Psychological Alignment and Transmutation by the Self",
    intro: "This session bridges the metaphysical material into psychology, arguing that spiritual progress isn't just about knowledge but about lived, emotional purification. It introduces the idea of 'dredging' the subconscious, explores projection and energetic responsibility for one's emotions, and closes with two extended metaphorical passages on the pursuit of wholeness.",
    concepts: [
      "The difference between spiritual 'initiations' isn't just knowledge \u2014 it's the degree of emotional purification and lived experience a person has undergone.",
      "Emotional 'dredging' (bringing subconscious material to the surface) happens in stages: physical (removing drugs/toxins), emotional (the hardest and longest stage), and mental (especially hard for highly intellectual people, who may become rigid or isolated).",
      "A key claim: uncontrolled emotional expression (anger, jealousy, resentment) is framed as literally energetic and structurally damaging \u2014 both to oneself and to others, especially those in 'attraction point' positions (public figures, leaders) who absorb others' projected emotions.",
      "Wholeness is presented as a goal with real stakes \u2014 a fully integrated person is described as contributing something unique to the 'Collective Consciousness' that a passive, unexamined person cannot.",
      "This section links directly to Jung and Maslow as the two psychologists most associated (per the author) with 'wholeness and perfection' as legitimate areas of study.",
      "The 7 Rays are mapped loosely onto different schools of psychology (e.g. Freud \u2192 sexual drive; Jung \u2192 wisdom and Self; Adler \u2192 power)."
    ],
    terms: [
      { term: "Dredging", def: "The process of surfacing subconscious material for conscious integration." },
      { term: "Projection", def: "Attributing one's own unconscious material to an external person or situation." },
      { term: "The Great Work", def: "Transmutation achieved through self-knowledge." },
      { term: "Attraction points", def: "Public or authority figures who absorb the emotional projections of others." }
    ],
    reflection: [
      "Why does the text single out emotional purification (rather than intellectual knowledge) as the harder and more important task?",
      "What is 'projection,' according to this section, and why is recognising it described as 'the hardest realisation of all'?",
      "How does the mapping of psychological schools onto the 7 Rays reflect the author's overall worldview about how different systems of knowledge relate to each other?"
    ],
    quiz: [
      {
        q: "According to the text, what mainly distinguishes a person at the 'first initiation' from one at the 'second'?",
        options: ["How many books they've read", "The amount of experience and emotional purification they've undergone", "Their age", "Their job title"],
        correct: 1,
        explain: "The text is explicit that book knowledge alone doesn't equal spiritual progress \u2014 lived, purified experience does."
      },
      {
        q: "Which stage of 'dredging' does the text describe as the hardest and longest?",
        options: ["Physical", "Emotional", "Mental", "Spiritual"],
        correct: 1,
        explain: "Because humanity is described as still primarily 'emotionally based,' the emotional stage is framed as the hardest to work through."
      },
      {
        q: "What does the text mean by an 'attraction point'?",
        options: ["A tourist destination", "A public or authority figure who absorbs others' projected emotions", "A specific acupuncture point", "A chakra location"],
        correct: 1,
        explain: "People in focal public roles (government, church, business) are described as becoming targets for others' emotional projection."
      }
    ]
  },

  {
    id: 7,
    number: 7,
    pages: "69–77",
    title: "The Road to Individuation",
    covers: "The Road to Individuation",
    contentNote: "This session draws on Carl Jung's specific historical framework for gender (anima/animus), written in a very of-its-era, binary way. It's presented here as historically significant, not as settled truth \u2014 contemporary psychology and gender theory have since revisited and critiqued much of this model.",
    intro: "Drawing heavily on Carl Jung, this session covers the structure of the unconscious mind, the Shadow (disowned personality traits, recognised through projection), the anima/animus (Jung's concept of an unconscious 'contrasexual' element), and Maslow's concept of peak, ego-transcending experience (B-Cognition). It closes with Jung's comparison between psychological individuation and alchemy.",
    concepts: [
      "Draws heavily on Jung's model of the psyche: conscious mind, personal unconscious (sub-conscious), super-conscious, and the Collective Unconscious (shared, archetypal, and potentially 'infectious' at a mass level).",
      "Introduces Maslow's concept of B-Cognition (Being-Cognition) \u2014 a state of ego-transcending, peak experience associated with wholeness, timelessness, and values like truth, beauty, and aliveness. This state can arise from either deep relaxation or high-tension/excitement.",
      "Maslow's alternate (non-ascetic) path to this state \u2014 via strong identity, happiness, and fulfilled basic needs \u2014 is framed as an encouraging alternative to traditional renunciation-based spiritual paths.",
      "The Shadow: the disowned, 'dark' aspects of one's own personality; recognised largely through projection \u2014 seeing one's own faults in others. Integration requires accepting (not guilt-ridden dwelling on) these traits.",
      "Anima/Animus: Jung's concept of the unconscious 'contrasexual' element in each person \u2014 feminine imprint in men (anima), masculine imprint in women (animus). Described as the source of much relational conflict, and recognisable only through relationship with the opposite sex.",
      "The Self (capital-S) is the transcendent, unifying factor that reconciles the conscious and unconscious, symbolised often by circular imagery like the mandala.",
      "Jung's parallel with alchemy: the psychological process of integration is compared to the alchemists' pursuit of the Philosopher's Stone \u2014 both requiring a 'vessel,' patience, and the union of opposites."
    ],
    terms: [
      { term: "Individuation", def: "Jung's term for the lifelong process of psychological integration and self-realisation." },
      { term: "Collective Unconscious", def: "The shared, inherited layer of the unconscious mind, holding archetypes common to all humanity." },
      { term: "Mask / persona", def: "The socially adapted 'face' a person presents to the world." },
      { term: "Mandala", def: "A circular symbolic image associated with the psyche seeking wholeness." },
      { term: "B-Cognition", def: "Maslow's term for Being-Cognition: a peak, ego-transcending experience associated with wholeness and heightened perception." }
    ],
    reflection: [
      "Why does recognising the Shadow require, per the text, 'considerable moral effort' rather than just intellectual understanding?",
      "How does the anima/animus concept explain (per the text) common patterns in romantic relationships, including arguments and 'love at first sight'?",
      "What parallel does Jung draw between psychological individuation and alchemy, and why might that comparison be useful (or limiting)?"
    ],
    quiz: [
      {
        q: "How is the Shadow typically recognised, according to the text?",
        options: ["Through dreams alone", "Through projection \u2014 seeing one's own faults in another person", "Through fasting", "Through colour therapy"],
        correct: 1,
        explain: "The 'mirror reflection syndrome' \u2014 seeing one's own disowned faults in someone else \u2014 is the primary route to recognising the Shadow."
      },
      {
        q: "What does Maslow's B-Cognition state involve?",
        options: ["Only extreme ascetic discipline", "Ego-transcending peak experience, arising from either deep relaxation or high tension/excitement", "A permanent state achieved only through years of therapy", "A purely intellectual, unemotional state"],
        correct: 1,
        explain: "Maslow found this state could be induced by very different conditions \u2014 not just discipline and sacrifice."
      },
      {
        q: "What does Jung compare the process of psychological individuation to?",
        options: ["A game of chess", "The alchemists' pursuit of the Philosopher's Stone", "A courtroom trial", "A military campaign"],
        correct: 1,
        explain: "Jung draws a direct parallel between integrating opposites in the psyche and the alchemical Great Work."
      }
    ]
  },

  {
    id: 8,
    number: 8,
    pages: "1–78",
    title: "Synthesis & Integration",
    covers: "Full-book review · Bibliography · Discussion",
    intro: "The final session ties the whole book together. The text moves from outer healing methods (Sessions 1\u20133), to causal explanations of disease (Session 4), to inner psychological work (Sessions 5\u20137) \u2014 with a consistent thread that physical symptoms are treated as the end point of a chain starting in the emotional/astral body, and that a healer's own inner development matters as much as any technique.",
    concepts: [
      "The book positions itself throughout as a bridge text \u2014 arguing for blending orthodox medicine, naturopathy, spiritual healing, and psychology rather than treating any one system as sufficient alone.",
      "Physical symptoms are consistently treated as the end point of a chain that starts in the emotional/astral body \u2014 true healing, per the text, requires addressing causes at that level, not just symptoms.",
      "The healer's own inner purification is treated as being just as important as any external technique.",
      "The book's overall arc: outer methods \u2192 causal theory \u2192 inner psychological work \u2192 individuation as the ultimate goal."
    ],
    activities: [
      "Pick one healing modality from Sessions 1\u20133 and one psychological concept from Sessions 6\u20137. Explain, in your own words, how the book would say they connect.",
      "Group discussion: which parts of the text's framework feel most 'provable' or practically useful today, and which feel most speculative or dated (remember \u2014 this was written in 1973)?",
      "Review the Bibliography (below) together \u2014 several referenced authors (Jung, Maslow, Blavatsky, Alice Bailey, C.W. Leadbeater) are worth flagging for anyone wanting to go deeper."
    ],
    reflection: [
      "What's one idea from this course you'll actually carry with you \u2014 and one you'll leave behind?",
      "If you had to explain 'The Christos Experiment' to a friend who's never heard of it, what would you say it's really about?"
    ],
    quiz: [
      {
        q: "What is the overall arc of the book, according to this course?",
        options: ["Psychological work, then outer healing methods, then causal theory", "Outer healing methods, then causal theory of disease, then inner psychological work", "Bibliography, then introduction, then conclusion", "There is no discernible structure"],
        correct: 1,
        explain: "The book moves from external healing techniques, to a causal/karmic theory of disease, to inner psychological transformation."
      },
      {
        q: "What consistent thread runs through nearly every section of the book?",
        options: ["Physical symptoms are treated as the true root cause", "Physical symptoms are treated as the end point of a chain starting in the emotional/astral body", "All disease is purely genetic", "Only orthodox medicine can cure anything"],
        correct: 1,
        explain: "This is the book's recurring causal claim, from the cell-mind chapter through to the subtle bodies chapter."
      },
      {
        q: "According to the book, what matters as much as any healing technique itself?",
        options: ["The cost of the treatment", "The healer's own inner purification and development", "The patient's astrological sign", "The time of day the healing occurs"],
        correct: 1,
        explain: "The 'Healing and Healers' chapter is explicit that a healer's own subtle-body condition affects the outcome."
      }
    ]
  }
];

const BIBLIOGRAPHY = [
  { title: "The Art of Spiritual Healing", author: "Joel S. Goldsmith" },
  { title: "Is Any Sick Among You?", author: "J.B. Chambers" },
  { title: "Psychic Healing", author: "Yogi Ramacharaka" },
  { title: "Your Mind Can Heal You", author: "F.W. Bailes" },
  { title: "Some Unrecognised Factors in Medicine / The Mystery of Healing", author: "The Medical Group of the Theosophical Research Centre, London" },
  { title: "Colour Psychology and Colour Therapy", author: "Faber Birren" },
  { title: "Chinese Medicine", author: "Georges Beau" },
  { title: "The Natural and Drugless Way for Better Health", author: "M.O. Garten" },
  { title: "The Human Aura", author: "Dr. W.J. Kilner" },
  { title: "Psychic Discoveries Behind the Iron Curtain", author: "Ostrander and Schroeder" },
  { title: "Esoteric Healing", author: "Alice Bailey" },
  { title: "Inner Side of Church Worship", author: "C.W. Leadbeater" },
  { title: "The Mind in Healing", author: "Rolf Alexander" },
  { title: "Psychology, the Science of Mental Life", author: "G.A. Miller" },
  { title: "Naturopathic Practice", author: "Hewlett Parsons" },
  { title: "Let Food Be Your Medicine", author: "Dr. H. Bieler" },
  { title: "Everybody's Guide to Nature Cure", author: "H. Benjamin" },
  { title: "How to Use the Twelve Tissue Salts", author: "Esther Chapman" },
  { title: "The Seven Keys to Colour Healing", author: "Roland Hunt" },
  { title: "Future Shock", author: "A. Toffler" },
  { title: "Survival in the Atomic Age", author: "Mira Louise" },
  { title: "Toward a Psychology of Being", author: "A.H. Maslow" },
  { title: "An Introduction to Jung's Psychology", author: "Frieda Fordham" },
  { title: "Gestalt Therapy", author: "Perls, Hefferline and Goodman" },
  { title: "Self-Analysis", author: "Karen Horney" },
  { title: "Self-Culture", author: "I.K. Taimni" },
  { title: "Personality Development and Psychopathology", author: "N. Cameron" },
  { title: "Psychology and Alchemy", author: "C.G. Jung" },
  { title: "The Archetypes and the Collective Unconscious", author: "C.G. Jung" },
  { title: "The Practice of Psychotherapy", author: "C.G. Jung" },
  { title: "Aion \u2014 Research into the Self", author: "C.G. Jung" }
];
