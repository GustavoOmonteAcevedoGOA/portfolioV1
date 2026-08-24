# Prompt maestro: crea y despliega tu portfolio con un solo prompt

Copia el prompt de abajo en un asistente AI de código (Claude Code o similar) **dentro de una carpeta vacía**, ten a mano tu CV (PDF o texto) y tu foto. No necesitas nada más: el asistente te entrevistará, construirá el sitio, lo verificará y te guiará hasta dejarlo publicado en Netlify. English version below.

---

## El prompt (Español)

```text
Eres mi desarrollador experto. Vas a construir mi portfolio personal COMPLETO — desde cero hasta desplegado en Netlify — en esta carpeta vacía. Este prompt es tu única especificación: no termines hasta cumplir la "Definición de terminado" del final.

FASE 0 — ENTREVISTA (antes de escribir código)
Pídeme, en un solo mensaje: (1) mi CV en PDF o texto, (2) mi foto de perfil, (3) nombre completo y rol actual, (4) email y teléfono a mostrar, (5) links (LinkedIn, GitHub, otros), (6) lista de proyectos con demo/código si tengo, (7) idioma del sitio, (8) preferencia de colores. Usa SOLO datos reales que yo te dé; nunca inventes experiencia, empleadores ni skills. Si algo falta, pregunta — no supongas. Con mis respuestas, muéstrame un plan de contenido sección por sección y espera mi OK antes de codear.

STACK (no negociable, mantenlo simple)
- Sitio estático: HTML5 semántico en un index.html, SCSS en parciales pequeños compilado con Dart Sass, JavaScript vanilla en funciones pequeñas minificado con Terser.
- Sin frameworks ni bundlers: solo npm scripts (build:css, build:js, build, watch:css, serve).
- La carpeta build/ compilada se commitea; netlify.toml publica desde la raíz sin build step e incluye headers básicos de seguridad.
- Responsive mobile-first, accesible (labels con for/id, alt en imágenes, contraste, navegación por teclado) y SEO completo (title, meta description, Open Graph og:title/description/type; og:url, og:image con URL absoluta y canonical se agregan al final, cuando exista el dominio).

SECCIONES
1. Hero: nombre, rol, foto (con efecto de glow suave detrás), email, teléfono, links sociales y botón que abre mi CV en PDF (guárdalo en files/).
2. Skills: chips agrupados por categoría (Frontend / Backend / Bases de datos / Testing & DevOps / AI & LLM Engineering), derivados de mi CV. En desktop, grupos en 2 columnas para que la sección no crezca demasiado.
3. AI-Augmented Development (la sección diferenciadora): intro con una frase clave resaltada en gradiente + dos tarjetas: (a) "Qué construyo con AI" — cosas concretas y verificables de mi CV; (b) "Principios de trabajo" — ej.: la AI acelera pero la corrección es mía; todo cambio asistido lleva tests y revisión humana; herramientas tipadas y deterministas en vez de acceso libre; validar contra datos reales; documentar contexto para humanos y AI. Tarjetas con barra de acento en gradiente arriba y hover con elevación.
4. Proyectos: tarjetas con imagen, tags, descripción corta y botones Demo/Código.
5. Contacto: formulario con Netlify Forms (data-netlify="true", method POST, atributo name).
6. Footer con el año actual.

DISEÑO
- Glassmorphism: tarjetas translúcidas (rgba blanco ~0.1, border-radius, sombra) sobre fondo con gradiente.
- Selector de 3-4 temas de color (gradientes de página distintos) + dark mode con toggle, persistido en localStorage y respetando prefers-color-scheme como default.
- Navegación con scroll suave, animaciones sutiles de aparición al hacer scroll, botón flotante "subir".
- Tipografía de Google Fonts (una para títulos, otra para texto). Todo el texto en UN idioma, sin lorem ipsum.

ERRORES CONOCIDOS QUE DEBES EVITAR (aprendidos en producción)
- Header fijo: al pasar a position:fixed el header sale del flujo y el contenido salta. Compensa con padding-top en el body igual a su altura + margen, y declara SIEMPRE top:0; left:0 en la clase fija.
- Botón "subir": usa window.scrollTo({top:0, behavior:'smooth'}) nativo. NUNCA un loop de requestAnimationFrame que reste porcentajes: se acerca a 0 asintóticamente, nunca termina y deja el scroll trabado en el tope.
- Temas: verifica el contraste de CADA texto con gradiente contra CADA tema de fondo; los títulos que caigan sobre fondos de acento deben cambiar de color por tema (overrides CSS por clase de tema, cuidando la especificidad).
- Elementos decorativos con position:absolute no participan del layout: si un panel lateral convive con contenido, usa flex con gap real para que la sombra no pise el texto y queden alineados arriba/abajo.
- Fondos decorativos con altura fija se quedan cortos si el contenido crece: usa height:100% + min-height.

PROCESO (en orden, sin saltarte pasos)
1. Entrevista y plan de contenido → espera mi OK.
2. Construye. 3. Compila sin errores ni warnings.
4. Verifica: toda ruta local de assets resuelve; revisa la página en 375px, 768px y 1200px; prueba dark mode y cada tema; prueba el header fijo bajando y subiendo; prueba el botón de subir e intenta bajar inmediatamente.
5. Levanta un servidor local y pídeme que lo revise; itera con mi feedback.
6. README con stack, comandos y pasos de deploy.
7. Guíame para: crear el repo en GitHub y pushear; conectar el repo en app.netlify.com (Import project, build command vacío, publish "."); configurar notificaciones de Forms; y cuando exista la URL final, agrega og:url, og:image y canonical con URLs absolutas y pushea de nuevo.
8. Verifica el sitio en producción (200 en la página, el PDF y la imagen og) y recuérdame refrescar la preview con el Post Inspector de LinkedIn.

DEFINICIÓN DE TERMINADO
Sitio desplegado en Netlify con mis datos reales, formulario funcionando, sin links rotos, sin idiomas mezclados, sin fechas viejas, sin datos inventados, y el link listo para anclar en LinkedIn. Commits sin trailers de co-autoría.
```

---

## The prompt (English)

```text
You are my expert developer. You will build my COMPLETE personal portfolio — from scratch to deployed on Netlify — in this empty folder. This prompt is your only spec: do not finish until the "Definition of done" at the end is met.

PHASE 0 — INTERVIEW (before writing any code)
In a single message, ask me for: (1) my resume as PDF or text, (2) my profile photo, (3) full name and current role, (4) email and phone to display, (5) links (LinkedIn, GitHub, others), (6) project list with demo/code links if any, (7) site language, (8) color preferences. Use ONLY real data I give you; never invent experience, employers, or skills. If something is missing, ask — don't assume. With my answers, show me a section-by-section content plan and wait for my OK before coding.

STACK (non-negotiable, keep it simple)
- Static site: semantic HTML5 in one index.html, SCSS in small partials compiled with Dart Sass, vanilla JavaScript in small named functions minified with Terser.
- No frameworks or bundlers: npm scripts only (build:css, build:js, build, watch:css, serve).
- Commit the compiled build/ folder; netlify.toml publishes from the repo root with no build step and includes basic security headers.
- Mobile-first responsive, accessible (label for/id pairs, image alt text, contrast, keyboard navigation), full SEO (title, meta description, Open Graph og:title/description/type; add og:url, og:image with absolute URLs and canonical at the end, once the domain exists).

SECTIONS
1. Hero: name, role, photo (soft glow behind it), email, phone, social links, and a button opening my resume PDF (store it in files/).
2. Skills: chips grouped by category (Frontend / Backend / Databases / Testing & DevOps / AI & LLM Engineering), derived from my resume. On desktop, groups in 2 columns so the section stays compact.
3. AI-Augmented Development (the differentiator): intro with a key phrase highlighted in gradient + two cards: (a) "What I build with AI" — concrete, verifiable items from my resume; (b) "Principles I work by" — e.g.: AI accelerates but I own correctness; every AI-assisted change ships with tests and human review; typed, deterministic tools over free-form access; validate against real data; document context for humans and AI alike. Cards get a gradient accent bar on top and a hover lift.
4. Projects: cards with image, tags, short description, Demo/Code buttons.
5. Contact: form wired to Netlify Forms (data-netlify="true", method POST, name attribute).
6. Footer with the current year.

DESIGN
- Glassmorphism: translucent cards (white rgba ~0.1, border-radius, shadow) over a gradient background.
- 3-4 color themes (different page gradients) + dark mode toggle, persisted in localStorage and defaulting to prefers-color-scheme.
- Smooth-scroll navigation, subtle scroll-in animations, floating scroll-to-top button.
- Google Fonts (one for headings, one for body). All text in ONE language, no lorem ipsum.

KNOWN PITFALLS YOU MUST AVOID (learned in production)
- Fixed header: switching to position:fixed removes the header from flow and the content jumps. Compensate with body padding-top equal to its height + margin, and ALWAYS declare top:0; left:0 on the fixed class.
- Scroll-to-top button: use native window.scrollTo({top:0, behavior:'smooth'}). NEVER a requestAnimationFrame loop subtracting percentages: it approaches 0 asymptotically, never terminates, and locks scrolling at the top.
- Themes: check the contrast of EVERY gradient text against EVERY theme background; titles sitting on accent backgrounds must change color per theme (CSS overrides per theme class, minding specificity).
- position:absolute decorations don't participate in layout: if a side panel coexists with content, use real flex with gap so its shadow never overlaps text and both align top and bottom.
- Fixed-height decorative backgrounds fall short when content grows: use height:100% + min-height.

PROCESS (in order, no skipping)
1. Interview and content plan → wait for my OK.
2. Build. 3. Compile with zero errors or warnings.
4. Verify: every local asset path resolves; review the page at 375px, 768px and 1200px; test dark mode and every theme; test the fixed header scrolling down and back up; test scroll-to-top then immediately try scrolling down.
5. Start a local server and ask me to review; iterate on my feedback.
6. README with stack, commands and deploy steps.
7. Guide me to: create the GitHub repo and push; connect it in app.netlify.com (Import project, empty build command, publish "."); enable Forms notifications; and once the final URL exists, add og:url, og:image and canonical with absolute URLs and push again.
8. Verify production (200 on the page, the PDF and the og image) and remind me to refresh the preview with LinkedIn's Post Inspector.

DEFINITION OF DONE
Site deployed on Netlify with my real data, working contact form, no broken links, no mixed languages, no stale dates, no invented facts, and the link ready to pin on LinkedIn. Commits without co-author trailers.
```

---

### Por qué funciona este prompt / Why this prompt works

- **Se ancla en datos reales** (entrevista + CV) y prohíbe inventar — el fallo más común de los asistentes.
- **Fija el stack por adelantado**, evitando que el asistente traiga un framework que un portfolio no necesita.
- **Codifica bugs reales ya resueltos** (header fijo, scroll trabado, contraste por tema), para que nadie los vuelva a pagar.
- **Ordena el proceso** (entrevista → plan → build → verificación → deploy) con una **definición de terminado** medible: el prompt no "sugiere", exige terminar.
