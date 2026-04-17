## Why

`YourStory.astro` ya tiene una composicion editorial fuerte, pero hoy entra como un bloque totalmente estatico, lo que reduce su impacto frente a otras secciones del sitio que ya usan motion para reforzar jerarquia y ritmo narrativo. La seccion contiene un headline principal, un subtitulo con enfasis inline, un CTA y un watermark de fondo, asi que es un buen candidato para una animacion de entrada breve, clara y encapsulada.

Este cambio se propone ahora para definir una animacion GSAP consistente con el lenguaje actual del proyecto y con las referencias ya usadas en secciones como About y CTA, pero limitada estrictamente a `src/components/organisms/YourStory.astro`. La intencion es mejorar la entrada visual de la seccion sin modificar otros componentes, secciones, scripts globales ni comportamientos compartidos.

## What Changes

- Definir una secuencia GSAP de scroll reveal para `YourStory.astro`.
- Basar la solucion en el mismo lenguaje de motion ya usado en secciones como About y CTA, pero sin reutilizar ni modificar su implementacion.
- Mantener toda la implementacion limitada a `src/components/organisms/YourStory.astro`, sin cambios en otros componentes, secciones o utilidades globales.
- Definir wrappers y selectores locales para el watermark, el titular, la descripcion y la fila de acciones.
- Formalizar el orden de entrada de la seccion: watermark sutil, headline principal, descripcion y acciones.
- Reforzar el uso de buenas practicas GSAP: `autoAlpha`, transforms, una sola timeline con `ScrollTrigger`, `gsap.matchMedia()` y propiedades performantes.
- Dejar explicito que la animacion principal debe ser discreta y activada por scroll, sin `scrub` y sin multiples triggers independientes para beats menores.
- Garantizar compatibilidad con Astro SSG como progressive enhancement: el HTML base debe permanecer valido y visible sin JavaScript.
- Aclarar la preparacion contra FOUC para que solo se oculten wrappers concretos de reveal, nunca toda la seccion.

## Capabilities

### New Capabilities
- `your-story-motion`: Define los requisitos de animacion editorial y scroll reveal de la seccion Your Story, incluyendo el tratamiento del watermark y la ruta de reduced motion.

### Modified Capabilities
- `fouc-prevention`: Ajusta como deben prepararse los wrappers animados dentro de `YourStory.astro` para que el contenido siga siendo visible si GSAP no se ejecuta.

## Impact

- OpenSpec artifacts en `openspec/changes/animate-your-story-section/`.
- Futura implementacion limitada a `src/components/organisms/YourStory.astro`.
- No se agregan dependencias nuevas, porque el proyecto ya usa `gsap` y `ScrollTrigger`.
- La referencia tecnica para la implementacion es el patron ya establecido en el proyecto y las guias de `gsap-core`, `gsap-timeline` y `gsap-scrolltrigger`.
- No hay impacto funcional sobre otras secciones, componentes reutilizables, rutas o scripts compartidos.
