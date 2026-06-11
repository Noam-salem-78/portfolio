/* ================================================
   NOAM SALEM — PORTFOLIO
   script.js
   ================================================

   TABLE DES MATIÈRES
   1. Traductions FR / EN
   2. Système de langue
   3. Navigation (sticky, burger, smooth scroll)
   4. Animations au scroll (IntersectionObserver)
   5. Compteurs animés
   ================================================ */


/* ================================================
   1. TRADUCTIONS FR / EN
   — Pour modifier un texte, trouve la clé correspondante
     et change la valeur dans "fr" et "en".
   ================================================ */

const translations = {
  fr: {
    /* --- Navigation --- */
    nav_about:    "À propos",
    nav_exp:      "Expériences",
    nav_edu:      "Formation",
    nav_projects: "Projets",
    nav_skills:   "Compétences",
    nav_looking:  "Je cherche",
    nav_contact:  "Contact",
    nav_cv:       "CV",

    /* --- Hero --- */
    hero_eyebrow:   "Bachelor Digital & International Business · EMLV · Paris",
    hero_tagline:   "Un profil digital, créatif et international,\npret à contribuer à des projets innovants, concrets et orientés business.",
    hero_sub:       "Alternance disponible à partir du <strong>21 septembre 2026</strong> — pour un an minimum, avec la volonté de construire une collaboration durable jusqu'au master.",
    hero_cta1:      "Voir mon parcours",
    hero_cta2:      "Télécharger mon CV",
    hero_cta3:      "Me contacter",
    hero_available: "Disponible sept. 2026",
    tag1: "Digital Strategy",
    tag2: "Innovation",
    tag3: "International Business",
    tag4: "Content Creation",

    /* --- À propos --- */
    about_eyebrow: "Qui suis-je ?",
    about_title:   "À propos",
    about_p1: "Je suis étudiant en 3ème année de Bachelor Digital & International Business à l'EMLV. Mon parcours associe culture digitale, ouverture internationale, créativité et sens du business.",
    about_p2: "À travers mes expériences en communication digitale, vente et audiovisuel, j'ai développé une capacité à comprendre un besoin, concevoir du contenu adapté, analyser des résultats et travailler efficacement en équipe.",
    about_p3: "Ce qui me caractérise : une curiosité réelle pour l'innovation digitale, une forte capacité d'adaptation et l'envie d'apprendre sur des sujets variés — sans pour autant me disperser.",
    about_p4: "Mon objectif est de m'inscrire dans une collaboration durable : alternance bachelor à partir de septembre 2026, puis poursuite en master en alternance selon les opportunités.",
    attr1_title: "Profil international",
    attr1_desc:  "Semestre à Prague · Cours en anglais · 3 langues",
    attr2_title: "Curiosité & innovation",
    attr2_desc:  "Hackathons · Projets créatifs · Veille digitale",
    attr3_title: "Sens du business",
    attr3_desc:  "Analyse · Stratégie · Études de marché",
    attr4_title: "Vision long terme",
    attr4_desc:  "Bachelor → Master en alternance, même entreprise possible",

    /* --- Chiffres --- */
    stats_eyebrow: "En chiffres",
    stats_title:   "Quelques repères",
    stat1_label: "Vues Instagram",
    stat1_desc:  "Hausse approximative des vues pendant mon stage chez Property Partners",
    stat2_label: "Posts / semaine",
    stat2_desc:  "Rythme moyen de publication maintenu pendant l'expérience en community management",
    stat3_label: "Langues",
    stat3_desc:  "Français natif · Anglais B2 · Espagnol B1",
    stat4_label: "Semestre international",
    stat4_desc:  "Formation à Prague en environnement 100 % anglophone",
    stat5_unit:  "ans",
    stat5_label: "Collaboration possible",
    stat5_desc:  "Alternance bachelor, puis ambition de poursuivre en master selon les opportunités",

    /* --- Expériences --- */
    exp_eyebrow: "Mon parcours",
    exp_title:   "Expériences professionnelles",
    exp1_role:   "Community Manager · Stage",
    exp1_date:   "2025 · 3 mois",
    exp1_desc:   "Participation à la stratégie de communication digitale de l'agence immobilière. Création de contenus photo et vidéo pour Instagram, rédaction d'annonces et mise en ligne sur les plateformes. Analyse des performances et optimisation de la visibilité en ligne — contribution à une hausse d'environ 200 % des vues sur la période du stage.",
    exp1_insight:"Cette expérience m'a permis de comprendre comment une structure peut renforcer sa visibilité grâce à une stratégie de contenu régulière et une analyse concrète des performances.",
    exp2_role:   "Conseiller de vente · CDD",
    exp2_date:   "2025 · 1 mois",
    exp2_desc:   "Accueil et conseil client avec une approche personnalisée, mise en valeur des produits et gestion des encaissements en période de forte affluence.",
    exp2_insight:"Cette expérience a renforcé ma compréhension de l'expérience client, du contact terrain et de l'importance d'une attitude professionnelle dans un environnement exigeant.",
    exp3_role:   "Production audiovisuelle · CDD",
    exp3_date:   "2024 · 1 semaine",
    exp3_desc:   "Participation à un tournage professionnel : découverte des coulisses de la production audiovisuelle, observation des étapes de production et collaboration avec les équipes techniques et artistiques.",
    exp3_insight:"Une première immersion dans la création de contenu professionnel qui m'a permis de mieux saisir les exigences liées aux formats visuels.",

    /* --- Formation --- */
    edu_eyebrow: "Académique",
    edu_title:   "Formation",
    edu1_degree: "Bachelor Digital & International Business",
    edu1_date:   "2024 – Aujourd'hui",
    edu1_li1:    "Marketing digital · Commerce international · Gestion de projet",
    edu1_li2:    "Travaux d'équipe, études de cas, présentations orales",
    edu1_li3:    "Participation à plusieurs hackathons internes sur la créativité et l'innovation",
    edu2_degree: "Semestre international",
    edu2_date:   "Fév. – Juin 2026",
    edu2_li1:    "Cours 100 % en anglais dans un environnement multiculturel",
    edu2_li2:    "International Business Operations · Doing Business in a Globalized Environment",
    edu2_li3:    "International Entrepreneurship · Adaptation culturelle",
    edu2_badge:  "🇨🇿 Environnement 100 % anglophone",
    edu3_school: "Baccalauréat Général",
    edu3_degree: "Mention Bien",
    edu3_date:   "2024",
    edu3_li1:    "Sciences économiques et sociales (SES)",
    edu3_li2:    "Anglais LLCER",
    edu3_li3:    "Histoire-Géopolitique",

    /* --- Projets --- */
    proj_eyebrow: "Concret & créatif",
    proj_title:   "Projets digitaux & hackathons",
    proj1_name:   "Hackathons EMLV",
    proj1_type:   "Innovation & Créativité",
    proj1_desc:   "Participation à plusieurs hackathons internes à l'EMLV : idéation en équipe, construction de solutions dans un temps limité, présentation orale devant jury.",
    proj1_t1:     "Idéation",
    proj1_t2:     "Pitch",
    proj2_name:   "Projet Startup",
    proj2_type:   "Accessoire connecté · Sport & Tech",
    proj2_desc:   "Développement d'un concept de startup autour des objets connectés et du sport : réflexion sur le besoin utilisateur, le positionnement marché et le business model.",
    proj2_t1:     "Innovation",
    proj2_t2:     "Business Model",
    proj2_t3:     "Étude de marché",
    proj3_name:   "Études de marché & Business plans",
    proj3_type:   "Projets académiques",
    proj3_desc:   "Analyse de marché, compréhension client, positionnement concurrentiel et construction de propositions de valeur dans le cadre de projets académiques.",
    proj3_t1:     "Analyse",
    proj3_t2:     "Stratégie",
    proj3_t3:     "Présentation",
    proj4_name:   "Création de contenu digital",
    proj4_type:   "Visuels · Photo · Vidéo",
    proj4_desc:   "Création de visuels, contenus photo/vidéo et supports de communication via Canva et CapCut, dans le cadre de projets professionnels et académiques.",
    proj4_t1:     "Storytelling",
    proj4_t2:     "Communication visuelle",
    coming_title: "Portfolio visuel — bientôt disponible",
    coming_desc:  "Visuels Canva, posts Instagram et créations digitales à retrouver ici prochainement.",

    /* --- Compétences --- */
    skills_eyebrow: "Ce que je maîtrise",
    skills_title:   "Compétences",
    cat1_title: "Digital & Contenu",
    s1_1: "Création de contenu",
    s1_2: "Communication digitale",
    s1_4: "Analyse de performance",
    s1_5: "Rédaction digitale",
    s1_6: "Mise en ligne de contenus",
    cat2_title: "Business & Projet",
    s2_1: "Gestion de projet",
    s2_2: "Étude de marché",
    s2_3: "Business plan",
    s2_4: "Présentation orale",
    s2_5: "Organisation",
    s2_6: "Vision business",
    cat3_title: "Outils",
    s3_ai: "IA générative",
    cat4_title: "Soft Skills",
    ss1: "Créativité",
    ss2: "Adaptabilité",
    ss3: "Travail en équipe",
    ss4: "Communication",
    ss5: "Rigueur",
    ss6: "Organisation",
    ss7: "Curiosité",
    ss8: "Autonomie",
    level_notions: "Notions",
    level_cert:    "Certif. passée",

    /* --- Tags compétences (timeline & projets) --- */
    skill_content:  "Création de contenu",
    skill_perf:     "Analyse de performance",
    skill_writing:  "Rédaction digitale",
    skill_client:   "Relation client",
    skill_adapt:    "Adaptabilité",
    skill_team:     "Travail en équipe",
    skill_rigor:    "Rigueur",
    skill_av:       "Audiovisuel",
    skill_creative: "Créativité",
    skill_coord:    "Coordination",

    /* --- Langues --- */
    lang_eyebrow:  "Ouverture internationale",
    lang_title:    "Langues & International",
    lang1_name:    "Français",
    lang1_level:   "Natif",
    lang2_name:    "Anglais",
    lang3_name:    "Espagnol",
    lang_context1: "Mon cursus Digital & International Business est construit autour de la dimension internationale : semestre universitaire à Prague, cours entièrement dispensés en anglais, projets menés avec des étudiants de cultures différentes.",
    lang_context2: "Je suis à l'aise dans un environnement multiculturel et ouvert à des missions impliquant des interlocuteurs internationaux.",

    /* --- Intérêts --- */
    int_eyebrow: "Ce qui me définit aussi",
    int_title:   "Centres d'intérêt",
    int1_title:  "Voyages",
    int1_desc:   "Ouverture d'esprit et curiosité pour d'autres cultures",
    int2_title:  "Audiovisuel",
    int2_desc:   "Intérêt pour la création de contenu et les formats visuels",
    int3_title:  "Pop culture",
    int3_desc:   "Compréhension des tendances et des codes générationnels",
    int4_title:  "Musique",
    int4_desc:   "Sensibilité créative et attention aux détails",
    int5_title:  "Running",
    int5_desc:   "Discipline, régularité et dépassement de soi",

    /* --- Ce que je recherche --- */
    lf_eyebrow: "Pour les recruteurs",
    lf_title:   "Ce que je recherche",
    lf_intro:   "Je recherche une alternance à partir du <strong>21 septembre 2026</strong> dans un environnement digital, innovant et stimulant. Mon objectif est de contribuer à des projets concrets, d'apprendre rapidement et de m'inscrire dans une collaboration durable — avec la possibilité de poursuivre en master en alternance.",
    lf1_title:  "Projets digitaux & innovation",
    lf2_title:  "Création de contenu & visibilité en ligne",
    lf3_title:  "Gestion de projet & coordination",
    lf4_title:  "Business development digital & analyse de marché",
    lf_outro:   "Je suis ouvert à différents secteurs, tant que les missions me permettent de progresser sur des sujets digitaux, business et innovants.",

    /* --- Contact --- */
    contact_eyebrow:       "Échangeons",
    contact_title:         "Restons en contact",
    contact_tagline:       "Disponible pour échanger autour d'une opportunité d'alternance et de projets digitaux à fort potentiel.",
    contact_email_label:   "Email",
    contact_phone_label:   "Téléphone",
    contact_location_label:"Localisation",
    contact_btn_email:     "M'envoyer un email",
    contact_btn_cv:        "Télécharger mon CV",
    contact_btn_linkedin:  "Voir mon LinkedIn",

    /* --- Footer --- */
    footer_text: "© 2026 Noam SALEM · Portfolio personnel",
    footer_top:  "↑ Haut de page",
  },

  /* ======================================================
     VERSION ANGLAISE
     — Traduis ici si tu veux ajuster le wording EN
     ====================================================== */
  en: {
    /* --- Navigation --- */
    nav_about:    "About",
    nav_exp:      "Experience",
    nav_edu:      "Education",
    nav_projects: "Projects",
    nav_skills:   "Skills",
    nav_looking:  "What I'm looking for",
    nav_contact:  "Contact",
    nav_cv:       "Resume",

    /* --- Hero --- */
    hero_eyebrow:   "Digital & International Business Bachelor · EMLV · Paris",
    hero_tagline:   "A digital, creative and internationally-minded profile,\nready to contribute to innovative, business-driven projects.",
    hero_sub:       "Available for an apprenticeship from <strong>September 21, 2026</strong> — for at least one year, with the ambition to build a long-term collaboration through a master's degree.",
    hero_cta1:      "See my background",
    hero_cta2:      "Download my resume",
    hero_cta3:      "Get in touch",
    hero_available: "Available Sept. 2026",
    tag1: "Digital Strategy",
    tag2: "Innovation",
    tag3: "International Business",
    tag4: "Content Creation",

    /* --- About --- */
    about_eyebrow: "Who am I?",
    about_title:   "About me",
    about_p1: "I'm a third-year Digital & International Business Bachelor student at EMLV. My academic path combines digital culture, international exposure, creativity and business awareness.",
    about_p2: "Through hands-on experience in digital communication, sales and audiovisual production, I've developed the ability to understand a brief, create relevant content, track results and collaborate effectively within a team.",
    about_p3: "What defines me: genuine curiosity for digital innovation, a strong capacity to adapt, and an eagerness to learn across a range of topics — while staying focused.",
    about_p4: "My goal is to grow within a lasting partnership: a bachelor apprenticeship starting September 2026, followed by a master's apprenticeship depending on the opportunities.",
    attr1_title: "International profile",
    attr1_desc:  "Semester in Prague · English-taught courses · 3 languages",
    attr2_title: "Curiosity & innovation",
    attr2_desc:  "Hackathons · Creative projects · Digital watch",
    attr3_title: "Business mindset",
    attr3_desc:  "Analysis · Strategy · Market research",
    attr4_title: "Long-term vision",
    attr4_desc:  "Bachelor → Master apprenticeship, same company possible",

    /* --- Stats --- */
    stats_eyebrow: "By the numbers",
    stats_title:   "Key figures",
    stat1_label: "Instagram views",
    stat1_desc:  "Approximate increase in views during my internship at Property Partners",
    stat2_label: "Posts / week",
    stat2_desc:  "Average publishing frequency maintained during my community management experience",
    stat3_label: "Languages",
    stat3_desc:  "French (native) · English B2 · Spanish B1",
    stat4_label: "International semester",
    stat4_desc:  "Studied in Prague in a fully English-speaking environment",
    stat5_unit:  "yrs",
    stat5_label: "Potential collaboration",
    stat5_desc:  "Bachelor apprenticeship, with the ambition to continue through a master's degree",

    /* --- Experience --- */
    exp_eyebrow: "My background",
    exp_title:   "Professional experience",
    exp1_role:   "Community Manager · Internship",
    exp1_date:   "2025 · 3 months",
    exp1_desc:   "Contributed to the digital communication strategy of a real estate agency. Created photo and video content for Instagram, wrote property listings and published them across platforms. Tracked performance metrics and optimised online visibility — contributing to an approximately 200% increase in views during the internship.",
    exp1_insight:"This experience taught me how a small business can grow its visibility through consistent content and straightforward performance analysis.",
    exp2_role:   "Sales Advisor · Fixed-term contract",
    exp2_date:   "2025 · 1 month",
    exp2_desc:   "Welcomed and advised customers with a personalised approach, highlighted products and handled transactions during busy peak periods.",
    exp2_insight:"This experience deepened my understanding of customer experience, on-the-ground engagement and the importance of professionalism in a demanding environment.",
    exp3_role:   "Audiovisual Production · Fixed-term contract",
    exp3_date:   "2024 · 1 week",
    exp3_desc:   "Participated in a professional shoot: discovered the behind-the-scenes of audiovisual production, observed key production stages and collaborated with technical and creative teams.",
    exp3_insight:"A first immersion in professional content creation that helped me understand what goes into producing polished visual content.",

    /* --- Education --- */
    edu_eyebrow: "Academic",
    edu_title:   "Education",
    edu1_degree: "Bachelor in Digital & International Business",
    edu1_date:   "2024 – Present",
    edu1_li1:    "Digital marketing · International business · Project management",
    edu1_li2:    "Teamwork, case studies, oral presentations",
    edu1_li3:    "Participation in several internal hackathons focused on creativity and innovation",
    edu2_degree: "International semester",
    edu2_date:   "Feb. – June 2026",
    edu2_li1:    "100% English-taught courses in a multicultural environment",
    edu2_li2:    "International Business Operations · Doing Business in a Globalized Environment",
    edu2_li3:    "International Entrepreneurship · Cross-cultural adaptation",
    edu2_badge:  "🇨🇿 Fully English-speaking environment",
    edu3_school: "French Baccalauréat",
    edu3_degree: "High honours (Mention Bien)",
    edu3_date:   "2024",
    edu3_li1:    "Economics & Social Sciences",
    edu3_li2:    "English — Advanced Language & Literature",
    edu3_li3:    "History & Geopolitics",

    /* --- Projects --- */
    proj_eyebrow: "Hands-on & creative",
    proj_title:   "Digital projects & hackathons",
    proj1_name:   "EMLV Hackathons",
    proj1_type:   "Innovation & Creativity",
    proj1_desc:   "Took part in several internal EMLV hackathons: team ideation, building solutions under time pressure, and pitching to a jury.",
    proj1_t1:     "Ideation",
    proj1_t2:     "Pitch",
    proj2_name:   "Startup Project",
    proj2_type:   "Connected wearable · Sport & Tech",
    proj2_desc:   "Developed a startup concept around connected wearables and sport: user needs analysis, market positioning and business model design.",
    proj2_t1:     "Innovation",
    proj2_t2:     "Business Model",
    proj2_t3:     "Market Research",
    proj3_name:   "Market Research & Business Plans",
    proj3_type:   "Academic projects",
    proj3_desc:   "Market analysis, customer understanding, competitive positioning and value proposition development as part of academic projects.",
    proj3_t1:     "Analysis",
    proj3_t2:     "Strategy",
    proj3_t3:     "Presentation",
    proj4_name:   "Digital Content Creation",
    proj4_type:   "Visuals · Photo · Video",
    proj4_desc:   "Created visuals, photo/video content and communication materials using Canva and CapCut, for both professional and academic projects.",
    proj4_t1:     "Storytelling",
    proj4_t2:     "Visual communication",
    coming_title: "Visual portfolio — coming soon",
    coming_desc:  "Canva designs, Instagram content and digital creations will be available here soon.",

    /* --- Skills --- */
    skills_eyebrow: "What I bring",
    skills_title:   "Skills",
    cat1_title: "Digital & Content",
    s1_1: "Content creation",
    s1_2: "Digital communication",
    s1_4: "Performance analysis",
    s1_5: "Digital copywriting",
    s1_6: "Content publishing",
    cat2_title: "Business & Project",
    s2_1: "Project management",
    s2_2: "Market research",
    s2_3: "Business plan",
    s2_4: "Oral presentation",
    s2_5: "Organisation",
    s2_6: "Business vision",
    cat3_title: "Tools",
    s3_ai: "Generative AI",
    cat4_title: "Soft Skills",
    ss1: "Creativity",
    ss2: "Adaptability",
    ss3: "Teamwork",
    ss4: "Communication",
    ss5: "Attention to detail",
    ss6: "Organisation",
    ss7: "Curiosity",
    ss8: "Autonomy",
    level_notions: "Basics",
    level_cert:    "Cert. completed",

    /* --- Skill tags (timeline & projects) --- */
    skill_content:  "Content creation",
    skill_perf:     "Performance analysis",
    skill_writing:  "Digital copywriting",
    skill_client:   "Customer relations",
    skill_adapt:    "Adaptability",
    skill_team:     "Teamwork",
    skill_rigor:    "Attention to detail",
    skill_av:       "Audiovisual",
    skill_creative: "Creativity",
    skill_coord:    "Coordination",

    /* --- Languages --- */
    lang_eyebrow:  "International exposure",
    lang_title:    "Languages & International",
    lang1_name:    "French",
    lang1_level:   "Native",
    lang2_name:    "English",
    lang3_name:    "Spanish",
    lang_context1: "My Digital & International Business programme is built around an international dimension: a university semester in Prague, fully English-taught courses, and projects carried out with students from diverse cultural backgrounds.",
    lang_context2: "I'm comfortable working in multicultural environments and open to assignments involving international stakeholders.",

    /* --- Interests --- */
    int_eyebrow: "What else defines me",
    int_title:   "Interests",
    int1_title:  "Travel",
    int1_desc:   "Open-mindedness and curiosity for other cultures",
    int2_title:  "Audiovisual",
    int2_desc:   "Interest in content creation and visual formats",
    int3_title:  "Pop culture",
    int3_desc:   "Understanding trends and generational codes",
    int4_title:  "Music",
    int4_desc:   "Creative sensibility and attention to detail",
    int5_title:  "Running",
    int5_desc:   "Discipline, consistency and personal challenge",

    /* --- What I'm looking for --- */
    lf_eyebrow: "For recruiters",
    lf_title:   "What I'm looking for",
    lf_intro:   "I'm looking for an apprenticeship starting <strong>September 21, 2026</strong> in a digital, innovative and stimulating environment. My goal is to contribute to meaningful projects, grow quickly and build a lasting professional relationship — with the potential to continue through a master's degree apprenticeship.",
    lf1_title:  "Digital projects & innovation",
    lf2_title:  "Content creation & online visibility",
    lf3_title:  "Project management & coordination",
    lf4_title:  "Digital business development & market analysis",
    lf_outro:   "I'm open to various industries, as long as the role allows me to grow across digital, business and innovation topics.",

    /* --- Contact --- */
    contact_eyebrow:       "Let's connect",
    contact_title:         "Get in touch",
    contact_tagline:       "Available to discuss apprenticeship opportunities and high-potential digital projects.",
    contact_email_label:   "Email",
    contact_phone_label:   "Phone",
    contact_location_label:"Location",
    contact_btn_email:     "Send me an email",
    contact_btn_cv:        "Download my resume",
    contact_btn_linkedin:  "View my LinkedIn",

    /* --- Footer --- */
    footer_text: "© 2026 Noam SALEM · Personal portfolio",
    footer_top:  "↑ Back to top",
  }
};


/* ================================================
   2. SYSTÈME DE LANGUE
   ================================================ */

let currentLang = 'fr';

/**
 * Applique la langue choisie à tous les éléments
 * portant un attribut data-i18n.
 * Les valeurs contenant du HTML (<strong>) sont
 * injectées via innerHTML, les autres via textContent.
 */
function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // Si la valeur contient du HTML, on utilise innerHTML
      if (dict[key].includes('<') || dict[key].includes('&')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Met à jour le bouton langue
  const btn = document.getElementById('langLabel');
  if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';

  // Met à jour l'attribut lang de la page (accessibilité + SEO)
  document.documentElement.setAttribute('lang', lang);
}

// Bouton langue
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });
}

// Applique le français au chargement
applyLanguage('fr');


/* ================================================
   3. NAVIGATION
   ================================================ */

// --- Sticky nav : ajoute une ombre au scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
}, { passive: true });

// --- Burger menu mobile ---
const navBurger = document.getElementById('navBurger');
const navLinks  = document.getElementById('navLinks');

if (navBurger && navLinks) {
  navBurger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navBurger.classList.toggle('open', isOpen);
    navBurger.setAttribute('aria-expanded', isOpen);
  });

  // Ferme le menu au clic sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navBurger.classList.remove('open');
      navBurger.setAttribute('aria-expanded', 'false');
    });
  });

  // Ferme le menu au clic en dehors
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      navBurger.classList.remove('open');
    }
  });
}


/* ================================================
   4. ANIMATIONS AU SCROLL
   ================================================ */

/**
 * Utilise IntersectionObserver pour déclencher
 * l'animation d'apparition quand un élément
 * [data-animate] entre dans le viewport.
 */
const animateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // On n'observe plus une fois visible
        animateObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Observe tous les éléments animables
document.querySelectorAll('[data-animate]').forEach(el => {
  animateObserver.observe(el);
});


/* ================================================
   5. COMPTEURS ANIMÉS
   ================================================ */

/**
 * Anime un compteur de 0 jusqu'à la valeur [data-target].
 * Durée : 1400ms, easing ease-out.
 */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1400;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

/**
 * Lance les compteurs quand la section stats
 * est visible dans le viewport.
 */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.counter').forEach(counter => {
          animateCounter(counter);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

const statsSection = document.getElementById('stats');
if (statsSection) {
  counterObserver.observe(statsSection);
}
