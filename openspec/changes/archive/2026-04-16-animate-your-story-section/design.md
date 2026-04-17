## Context

`YourStory.astro` ya renderiza una seccion editorial compacta con cuatro beats visuales claros: un watermark de fondo, un titular principal, una descripcion con enfasis inline y una fila de acciones con CTA y contacto. A diferencia de otras secciones del proyecto como About, Podcast o CTA, este bloque todavia no tiene motion propio, por lo que hoy entra como contenido estatico a pesar de ocupar una posicion importante dentro del flujo narrativo.

El proyecto ya tiene un patron GSAP bien establecido: `gsap-init.ts` registra `ScrollTrigger` y fija defaults globales, mientras que las secciones animadas usan `gsap.matchMedia()`, una timeline principal con `ScrollTrigger` y una ruta reducida para accesibilidad. Para `YourStory`, la solucion mas coherente es reutilizar ese patron y su lenguaje visual, especialmente el tipo de reveal editorial ya aplicado en About y CTA, sin elevar complejidad ni introducir dependencias nuevas.

Tambien hay una restriccion explicita de alcance: toda la futura implementacion debe vivir dentro de `src/components/organisms/YourStory.astro`. Eso excluye cambios en `SectionWrapper`, `SectionHeader`, `BrandButton`, `MaterialIcon`, estilos globales o scripts compartidos.

## Goals / Non-Goals

**Goals:**
- Definir una animacion GSAP solo para `YourStory.astro`.
- Mantener la implementacion encapsulada dentro de esta seccion.
- Reforzar la jerarquia editorial de la seccion con una entrada breve y legible.
- Usar una sola timeline con `ScrollTrigger` para el reveal principal.
- Usar `gsap.matchMedia()` para separar motion normal y reduced motion.
- Mantener el watermark como un layer decorativo secundario.
- Respetar Astro SSG, `prefers-reduced-motion` y el comportamiento de progressive enhancement.
- Seguir las buenas practicas de `gsap-core`, `gsap-timeline` y `gsap-scrolltrigger`.

**Non-Goals:**
- Modificar otros componentes o secciones del sitio.
- Cambiar `gsap-init.ts`, `Layout.astro` o scripts globales.
- Introducir pinning, scrub o animaciones continuas.
- Animar internals de `SectionHeader`, `BrandButton` o `MaterialIcon`.
- Redisenar el contenido, copy o layout de `YourStory`.

## Decisions

### 1. La animacion se implementara unicamente dentro de `YourStory.astro`
La seccion debe resolver su motion con wrappers, clases JS y un `<script>` local propio.

Esto se elige porque:
- cumple el requerimiento explicito de no tocar otros componentes o secciones;
- mantiene la ownership del comportamiento en el mismo archivo que renderiza la estructura;
- evita acoplar componentes reutilizables a una necesidad especifica de una sola seccion.

Alternativa considerada:
- animar o extender internals de `SectionHeader` o de otros atomos;
- rechazada por fragil, innecesaria y fuera de alcance.

### 2. El reveal principal usara una sola timeline con `ScrollTrigger`
La entrada de la seccion debe activarse como un reveal discreto cuando el bloque alcance un punto de entrada como `top 75%`.

Orden propuesto:
- watermark sutil;
- titular principal;
- descripcion;
- fila de acciones.

La timeline no debe usar `scrub`; debe funcionar como una entrada editorial breve usando `toggleActions`, igual que otras secciones del proyecto.

Alternativa considerada:
- crear un `ScrollTrigger` independiente por cada subbloque;
- rechazada porque fragmenta el ritmo, complica mantenimiento y hace mas fragil la sincronizacion.

### 3. Los targets deben resolverse desde la raiz de la seccion
La implementacion debe seleccionar elementos a partir del root local de `YourStory`, por ejemplo con `section.querySelector(...)` y `section.querySelectorAll(...)`.

Esto se elige porque:
- reduce el riesgo de colision con otras secciones que tambien usen GSAP;
- mantiene encapsulado el comportamiento;
- sigue el patron ya usado en `CtaSection.astro`.

Alternativa considerada:
- depender de selectores globales compartidos;
- rechazada porque amplia el radio de impacto sin necesidad.

### 4. Se usaran propiedades GSAP performantes y accesibles
La propuesta requiere usar:
- `autoAlpha` para visibilidad;
- transforms como `y` y `scale`;
- `gsap.matchMedia()` para distinguir entre motion normal y reduced motion;
- una timeline para secuenciar la entrada en vez de delays sueltos;
- un fallback que mantenga el contenido visible si la capa de motion no se ejecuta.

Esto se alinea con las skills `gsap-core`, `gsap-timeline` y `gsap-scrolltrigger`, y con el patron ya presente en el proyecto.

Alternativa considerada:
- usar CSS animations o tweens independientes sin timeline;
- rechazada porque rompe la consistencia con el lenguaje de motion existente.

### 5. El watermark se tratara como atmosfera, no como beat principal
El watermark `GRIT` ya funciona como fondo grafico. Su motion debe ser ligero, por ejemplo con fade y una escala minima, para no competir con el headline.

Alternativa considerada:
- usar un reveal fuerte o convertir el watermark en el primer foco visual;
- rechazada porque desplaza el enfasis desde el mensaje principal hacia un elemento decorativo.

### 6. La prevencion de FOUC se limitara a wrappers concretos
Solo los elementos que realmente participen en la secuencia deben marcarse como reveal targets. La seccion completa no debe arrancar oculta.

Esto reduce el riesgo de dejar contenido critico invisible si GSAP no corre o si el script falla.

Alternativa considerada:
- ocultar el contenedor principal completo;
- rechazada porque aumenta el riesgo de fallo visible y contradice progressive enhancement.

## Risks / Trade-offs

- [La animacion puede sentirse demasiado parecida a `CtaSection`] -> Mitigacion: conservar el mismo patron tecnico, pero ajustar el orden y la intensidad al caracter editorial de `YourStory`.
- [El watermark puede competir con el titular] -> Mitigacion: limitarlo a un fade y una escala muy sutil.
- [Contenido oculto si GSAP no se ejecuta] -> Mitigacion: aplicar reveal wrappers especificos y exigir una ruta segura de visibilidad.
- [La seccion puede perder impacto si la secuencia es demasiado corta] -> Mitigacion: usar overlaps medidos entre headline, descripcion y acciones.
- [El alcance puede expandirse a shared components] -> Mitigacion: documentar que toda la implementacion debe vivir solo en `src/components/organisms/YourStory.astro`.

## Migration Plan

1. Aprobar esta propuesta como cambio aislado para `YourStory.astro`.
2. Anadir wrappers y clases locales solo dentro de `YourStory.astro`.
3. Implementar una timeline GSAP con `ScrollTrigger` para el reveal principal.
4. Anadir el tratamiento sutil del watermark.
5. Implementar la ruta `prefers-reduced-motion` con `gsap.matchMedia()`.
6. Validar que sin JavaScript el contenido siga visible y usable.
7. Confirmar que no se modifico ninguna otra seccion ni componente.

## Open Questions

- No hay preguntas abiertas bloqueantes. El alcance, el patron tecnico y la restriccion de tocar solo `YourStory.astro` ya estan suficientemente definidos para implementacion.
