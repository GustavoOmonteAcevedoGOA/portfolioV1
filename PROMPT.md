# Reusable prompt: build your own AI-era portfolio

Copy the prompt below into an AI coding assistant (Claude Code, or similar), attach or paste your resume/CV, and it will build and deploy a portfolio like this one. Spanish version further down.

---

## The prompt (English)

```text
You are helping me build my personal portfolio website from scratch. My resume is attached — use ONLY facts from it; never invent experience, employers, or skills. If something important is missing (photo, links, phone, preferred email), ask me before the final version.

GOAL
A fast, single-page portfolio I can deploy on Netlify for free and pin on LinkedIn.

TECH CONSTRAINTS
- Static site: semantic HTML5, SCSS compiled with Dart Sass, vanilla JavaScript. No frameworks, no build server — npm scripts only (sass + terser).
- Commit the compiled output so Netlify needs no build step; include a netlify.toml with publish directory and basic security headers.
- Responsive (mobile-first), accessible (labels, alt text, contrast, keyboard navigation), and SEO-ready (title, meta description, Open Graph tags).

SECTIONS
1. Hero: name, current role, photo, email, links (LinkedIn, GitHub), and a button that opens my resume PDF.
2. Skills: grouped chips (Frontend / Backend / Databases / Testing & DevOps / AI & LLM Engineering) — derive the groups and items from my resume.
3. AI-Augmented Development: this is the differentiator. Two cards:
   a) "What I build with AI" — concrete, verifiable things from my resume (tools, integrations, workflows).
   b) "Principles I work by" — how I use AI responsibly, e.g.: AI accelerates but I own correctness; every AI-assisted change ships with tests and human review; give models typed, deterministic, well-tested tools instead of free-form access; validate against real data; write investigation docs so context survives for humans and AI alike.
4. Projects: cards with image, tags, short description, demo + code links. Ask me for my list.
5. Contact: a form wired to Netlify Forms (data-netlify="true").
6. Footer with current year.

DESIGN
- One cohesive look (suggestion: glassmorphism cards over a gradient background), dark mode toggle persisted in localStorage and respecting prefers-color-scheme, smooth scroll navigation, subtle scroll-in animations.
- All text in one language (English), consistent tone, no lorem ipsum.

PROCESS (follow in order)
1. Read my resume and show me a content plan (what goes in each section) before writing code.
2. Build the site; keep the SCSS in small partials and JS in small named functions.
3. Verify: compile with zero errors, check every local asset path resolves, and review the page at mobile and desktop widths.
4. Write a README (stack, dev commands, deploy steps) and prepare the repo for Netlify: I will connect it via GitHub for continuous deploys.
5. Give me the exact steps to publish on Netlify and to update the LinkedIn featured link.

QUALITY BAR
No broken links, no mixed languages, no outdated dates, no invented facts. Ask instead of guessing.
```

---

## El prompt (Español)

```text
Ayúdame a construir mi sitio web de portfolio personal desde cero. Adjunto mi CV — usa SOLO datos que estén ahí; nunca inventes experiencia, empleadores ni skills. Si falta algo importante (foto, links, teléfono, email preferido), pregúntame antes de la versión final.

OBJETIVO
Un portfolio de una sola página, rápido, desplegable gratis en Netlify y para anclar en LinkedIn.

RESTRICCIONES TÉCNICAS
- Sitio estático: HTML5 semántico, SCSS compilado con Dart Sass, JavaScript vanilla. Sin frameworks ni servidor de build — solo npm scripts (sass + terser).
- Commitea el output compilado para que Netlify no necesite build; incluye netlify.toml con el directorio de publicación y headers básicos de seguridad.
- Responsive (mobile-first), accesible (labels, alt, contraste, navegación por teclado) y con SEO (title, meta description, Open Graph).

SECCIONES
1. Hero: nombre, rol actual, foto, email, links (LinkedIn, GitHub) y un botón que abra mi CV en PDF.
2. Skills: chips agrupados (Frontend / Backend / Bases de datos / Testing & DevOps / AI & LLM Engineering) — deriva los grupos del CV.
3. Desarrollo aumentado con AI: el diferenciador. Dos tarjetas:
   a) "Qué construyo con AI" — cosas concretas y verificables de mi CV (herramientas, integraciones, workflows).
   b) "Principios de trabajo" — cómo uso AI de forma responsable: la AI acelera pero la corrección es mía; todo cambio asistido por AI lleva tests y revisión humana; darle a los modelos herramientas tipadas, deterministas y testeadas en vez de acceso libre; validar contra datos reales; documentar investigaciones para que el contexto sobreviva, para humanos y para AI.
4. Proyectos: tarjetas con imagen, tags, descripción corta y links de demo + código. Pídeme mi lista.
5. Contacto: formulario conectado a Netlify Forms (data-netlify="true").
6. Footer con el año actual.

DISEÑO
- Un look cohesivo (sugerencia: tarjetas glassmorphism sobre fondo con gradiente), dark mode con toggle persistido en localStorage y que respete prefers-color-scheme, scroll suave, animaciones sutiles al hacer scroll.
- Todo el texto en un solo idioma, tono consistente, nada de lorem ipsum.

PROCESO (en orden)
1. Lee mi CV y muéstrame un plan de contenido (qué va en cada sección) antes de escribir código.
2. Construye el sitio; SCSS en parciales pequeños y JS en funciones pequeñas con nombre.
3. Verifica: compila sin errores, comprueba que toda ruta local de assets resuelve, y revisa la página en ancho móvil y desktop.
4. Escribe un README (stack, comandos, pasos de deploy) y deja el repo listo para Netlify: lo conectaré vía GitHub para deploys continuos.
5. Dame los pasos exactos para publicar en Netlify y actualizar el link destacado de LinkedIn.

ESTÁNDAR DE CALIDAD
Sin links rotos, sin idiomas mezclados, sin fechas desactualizadas, sin datos inventados. Pregunta en vez de suponer.
```

---

### Why this prompt works

- **Grounds the AI in real data** (the resume) and explicitly forbids invention — the most common failure mode.
- **Fixes the tech constraints up front**, so the AI doesn't reach for a heavyweight framework a portfolio doesn't need.
- **Orders the process** (plan → build → verify → document → deploy) instead of asking for everything at once.
- **Defines a quality bar and permission to ask questions**, which produces fewer confident mistakes.
