## Why

`PodcastSection` ya cumple su función de contenido, pero hoy aparece como un bloque estático frente a un sitio que ya tiene una gramática de movimiento clara en secciones como Hero y About. Esa diferencia rompe el ritmo editorial de la landing y hace que una sección importante para descubrimiento y conversión se sienta menos integrada al resto de la experiencia.

Este cambio se propone ahora para definir, antes de implementar, una versión animada de `PodcastSection` que conserve su estructura actual y adopte un patrón GSAP consistente con el proyecto: reveal por scroll para contenido principal, movimiento ambiental sutil para fondos decorativos y un fallback seguro para reduced motion y no-JS.

## What Changes

- Añadir requisitos de animación para `PodcastSection` sin alterar su composición funcional actual.
- Definir una secuencia editorial de reveal para encabezado, quote, embed, CTA y botón final.
- Definir movimiento ambiental sutil para los glows decorativos de fondo, alineado con el lenguaje visual ya usado en Hero.
- Establecer que la animación debe vivir en `PodcastSection.astro` y no requerir cambios en `SectionHeader`, `SpotifyEmbed`, `PodcastCTA` ni otros componentes.
- Formalizar un fallback para `prefers-reduced-motion` donde la sección preserve jerarquía visual sin usar desplazamientos o escalados notorios.
- Reforzar los requisitos de preparación de targets animados para evitar FOUC y asegurar visibilidad si GSAP no corre.

## Capabilities

### New Capabilities
- Ninguna. Este cambio solo extiende capacidades existentes para `PodcastSection` y visibilidad segura de targets animados.

### Modified Capabilities
- `podcast-section`: agrega requisitos de motion editorial, orden de reveal, fallback de reduced motion y reglas para animar wrappers locales en lugar de componentes internos.
- `fouc-prevention`: aclara cómo preparar targets animados dentro de una sección con reveal por scroll sin ocultar contenido crítico de forma insegura.

## Impact

- Artefactos OpenSpec en `openspec/changes/animate-podcast-section/`.
- Implementación futura acotada a `src/components/organisms/PodcastSection.astro`.
- Sin nuevas dependencias, porque la base GSAP y `ScrollTrigger` ya existen en el proyecto.
- No modifica el contrato funcional de `SpotifyEmbed`, `PodcastCTA`, `SectionHeader` ni otras secciones.
