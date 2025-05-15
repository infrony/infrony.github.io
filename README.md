# 🚀 Servitech Infrony - Sitio Web Corporativo

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="Servitech Infrony Lighthouse Score" width="100" height="358">

**Servitech Infrony** es un sitio web corporativo desarrollado con **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**, enfocado en presentar servicios de automatización con IA y desarrollo de software personalizado.

- ✅ Puntuaciones **optimizadas para SEO** en **PageSpeed Insights**.
- ✅ Integración con **Tailwind CSS** con soporte para **Modo Oscuro** y **_RTL_**.
- ✅ **Blog rápido y optimizado para SEO** con feed RSS automático, soporte para MDX, categorías y etiquetas personalizadas en español.
- ✅ **Optimización de imágenes** (usando Astro Assets y Unpic para CDN de imágenes universal).
- ✅ Generación de **sitemap del proyecto** basado en rutas.
- ✅ **Metaetiquetas Open Graph** para compartir en redes sociales.
- ✅ **Analytics** integrado con Google Analytics.

<br>

<img src="https://images.infrony.com/creatividad-en-equipo.jpg" alt="Servitech Infrony Screenshot">

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [🚀 Servitech Infrony - Sitio Web Corporativo](#-servitech-infrony---sitio-web-corporativo)
  - [Demo](#demo)
  - [Servicios Destacados](#servicios-destacados)
  - [Primeros pasos](#primeros-pasos)
    - [Estructura del proyecto](#estructura-del-proyecto)
    - [Comandos](#comandos)
    - [Configuración](#configuración)
      - [Personalización de diseño](#personalización-de-diseño)
    - [Despliegue](#despliegue)
      - [Despliegue a producción (manual)](#despliegue-a-producción-manual)
      - [Despliegue a Netlify](#despliegue-a-netlify)
      - [Despliegue a Vercel](#despliegue-a-vercel)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

</details>

<br>

## Demo

📌 [https://infrony.com/](https://infrony.com/)

<br>

## Servicios Destacados

- **Automatización con IA**: Implementación de flujos de trabajo automatizados con herramientas como Make.com y n8n.
- **Desarrollo de Software a Medida**: Creación de aplicaciones web y móviles personalizadas.
- **Integración de APIs**: Conexión de herramientas y plataformas para un flujo de datos centralizado.
- **Consultoría en Transformación Digital**: Asesoramiento para implementar tecnología adecuada y optimizar procesos.
- **Automatización de Correos y Gestión de Datos**: Sistemas de respuestas automáticas y procesamiento eficiente.
- **E-commerce y Tiendas Online**: Soluciones de comercio electrónico con pasarelas de pago integradas.

<br>

## Primeros pasos

**Servitech Infrony** es un sitio web moderno desarrollado con Astro y Tailwind CSS, focalizado en servicios de automatización con IA y transformación digital.

### Estructura del proyecto

La estructura de archivos y directorios del proyecto Servitech Infrony:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── errores-comunes-desarrollo-software.md
│   │   │   ├── integracion-apis-negocio.md
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [categoria]/
│   │   │   ├── [etiqueta]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.ts
├── package.json
├── astro.config.ts
└── ...
```

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando               | Acción                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Instala dependencias                               |
| `npm run dev`         | Inicia servidor local en `localhost:3000`          |
| `npm run build`       | Construye el sitio para producción en `./dist/`    |
| `npm run preview`     | Previsualiza la build localmente antes de desplegar|
| `npm run format`      | Formatea código con Prettier                       |
| `npm run lint:eslint` | Ejecuta Eslint                                     |
| `npm run astro ...`   | Ejecuta comandos CLI como `astro add`, `astro preview` |

<br>

### Configuración

Archivo de configuración básica: `./src/config.yaml`

```yaml
site:
  name: 'Servitech Infrony'
  site: 'https://infrony.com'
  base: '/'
  trailingSlash: false
  googleSiteVerificationId: 'n1vhO1_mfclQhh86YaOYe50X7hPcClVpxtaisVVbmgk'

# Configuración SEO predeterminada
metadata:
  title:
    default: 'Servitech Infrony'
    template: '%s — Soluciones Tecnológicas'
  description: '🚀 Soluciones Tecnológicas para Empresas, Desarrollo Web y Móvil, Integración de APIs, E-commerce, Diseño UX/UI y más. Tu aliado en la transformación digital.'
  
# Configuración i18n
i18n:
  language: es
  textDirection: ltr

# ... más configuraciones disponibles
```

#### Personalización de diseño

Para personalizar familias de fuentes, colores u otros elementos, consulte los siguientes archivos:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Despliegue

#### Despliegue a producción (manual)

Puedes crear una build optimizada con:

```shell
npm run build
```

Todos los archivos generados se encuentran en la carpeta `dist`, que puedes desplegar en cualquier servicio de hosting.

#### Despliegue a Netlify

Clona este repositorio en tu cuenta de GitHub y despliégalo en Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/infrony/infrony.github.io)

#### Despliegue a Vercel

Clona este repositorio en tu cuenta de GitHub y despliégalo en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Finfrony%2Finfrony.github.io)

<br>

## Contribuciones

Si tienes ideas, sugerencias o encuentras algún error, no dudes en abrir un issue o crear un pull request.
Eso sería muy útil para todos nosotros y estaríamos encantados de recibir tu ayuda.

## Licencia

**Servitech Infrony** está licenciado bajo la licencia MIT — consulta el archivo [LICENSE](./LICENSE.md) para más detalles.
