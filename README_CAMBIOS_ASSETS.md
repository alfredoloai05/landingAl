# Cambios aplicados a la landing

## Carpeta nueva de assets
Se creó esta carpeta:

```txt
public/assets/
```

Contenido:

```txt
public/assets/al-logo.svg
public/assets/hero-dashboard.svg
public/assets/assistant-bot.svg
public/assets/project-riosac.svg
public/assets/project-web.svg
public/assets/project-ai.svg
```

En Vite, todo lo que está dentro de `public/` se sirve directamente. Como tu proyecto usa `base: '/landingAl/'`, los assets se cargan correctamente con:

```js
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
```

## Archivos modificados

```txt
src/config/contact.js
src/components/Hero.jsx
src/components/sections/CTA.jsx
src/components/Footer.jsx
src/components/sections/Projects.jsx
src/styles/hero.css
src/styles/cta.css
src/styles/footer.css
src/styles/projects.css
src/styles/responsive.css
```

## Configuración real de contactos
Edita este archivo:

```txt
src/config/contact.js
```

Cambia especialmente:

```js
whatsappNumber: "593000000000",
```

por tu número real en formato internacional, sin `+`, espacios ni guiones. Ejemplo:

```js
whatsappNumber: "593987654321",
```

Ya dejé configurado:

```js
email: "alfredolb2009@hotmail.com"
github: "https://github.com/alfredoloai05"
linkedin: "https://www.linkedin.com/in/alfredoloaiza/"
instagram: "https://www.instagram.com/alfredolb2009/"
location: "Loja, Ecuador"
```

Si LinkedIn o Instagram no son exactos, reemplázalos ahí mismo.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## Verificación
El build fue probado correctamente con:

```bash
npm run build
```
