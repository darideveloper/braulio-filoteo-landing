## Context

`PodcastSection.astro` hoy es una sección estática compuesta por cinco bloques naturales: glows decorativos, encabezado, quote editorial, embed de Spotify, CTA de conversión y botón final. La estructura ya es suficientemente clara como para soportar una animación por capas sin necesidad de cambiar subcomponentes ni mover lógica a otros archivos.

El proyecto ya dispone de GSAP inicializado y de patrones previos que sirven como referencia: Hero resuelve entradas cinematográficas y movimiento ambiental, mientras About resuelve reveals por scroll con una timeline principal. Para `PodcastSection`, la solución más coherente es combinar ambos patrones en una versión más contenida: una sola timeline con `ScrollTrigger` para contenido principal y tweens independientes, muy sutiles, para los glows.

La propuesta también sigue las prácticas GSAP ya consistentes con el proyecto: usar `autoAlpha` para reveals, animar con transforms en lugar de propiedades de layout, encapsular la animación en una timeline principal, y resolver accesibilidad mediante `gsap.matchMedia()` para reduced motion.

La restricción principal es de alcance: la propuesta no debe forzar cambios en otros componentes ni convertir esta sección en un caso especial que rompa la arquitectura existente. Todo el comportamiento debe poder montarse localmente dentro de `PodcastSection.astro`, animando wrappers del markup ya presente.

## Goals / Non-Goals

**Goals:**
- Definir una animación GSAP para `PodcastSection` que se sienta consistente con Hero y About.
- Mantener la implementación futura encapsulada en `PodcastSection.astro`.
- Preservar la jerarquía editorial de la sección con un reveal claro de arriba hacia abajo.
- Proteger accesibilidad y estabilidad con reduced motion y fallback seguro ante no-JS.
- Evitar animar directamente elementos complejos como el iframe del embed.

**Non-Goals:**
- Modificar `SectionHeader`, `SideBorderQuote`, `SpotifyEmbed`, `PodcastCTA` o `BrandButton`.
- Introducir cambios de contenido, copy, layout o estructura funcional fuera de wrappers locales para animación.
- Añadir pinning, scrub largo, parallax agresivo o transiciones complejas.
- Extender este cambio a otras secciones del sitio.

## Decisions

### 1. La animación vivirá solo en `PodcastSection.astro`
La implementación futura debe agregar wrappers, selectores y script GSAP únicamente dentro de la sección.

Se elige este enfoque porque:
- respeta el alcance pedido;
- evita acoplar subcomponentes reutilizables a una necesidad específica de una sola sección;
- permite revertir o ajustar la animación sin tocar otras piezas del sistema.

Alternativa considerada:
- mover parte de la lógica a componentes hijos;
- descartada porque contaminaría componentes que hoy son presentacionales y reutilizables.

### 2. Usar una sola timeline con `ScrollTrigger` para el reveal principal
El contenido principal debe revelarse con una timeline única disparada cuando la sección entre al viewport.

Orden propuesto:
- encabezado;
- quote editorial;
- superficie del embed;
- CTA;
- botón final.

Alternativa considerada:
- crear un `ScrollTrigger` por bloque;
- descartada porque fragmenta el ritmo visual y complica mantener una narrativa de reveal consistente.

### 3. Animar wrappers locales, no componentes internos
Los bloques principales deben animarse a través de contenedores locales con clases tipo `js-podcast-*`.

Se toma esta decisión para:
- evitar tocar internals de `SectionHeader`, `SpotifyEmbed` o `PodcastCTA`;
- reducir el riesgo de glitches visuales en el iframe de Spotify;
- mantener la animación desacoplada de componentes que podrían reutilizarse en otro contexto.

Alternativa considerada:
- seleccionar nodos internos de subcomponentes;
- descartada por frágil y difícil de mantener.

### 4. El embed se anima como superficie completa
La propuesta considera al bloque del `SpotifyEmbed` como una sola superficie animada, usando opacidad y transform sobre su wrapper.

Alternativa considerada:
- animar el iframe directamente;
- descartada porque los iframes suelen comportarse peor visualmente y ofrecen menos control estable.

### 5. Los glows tendrán movimiento ambiental independiente y sutil
Los fondos decorativos podrán desplazarse suavemente con transforms y un `scrub` ligero, separado de la timeline principal de reveal.

Alternativa considerada:
- dejar glows estáticos;
- válida, pero menos coherente con el lenguaje del Hero;
- también se consideró un movimiento más notorio;
- descartado por competir con el contenido central.

### 6. Reduced motion usará visibilidad inmediata o fade corto
Cuando el usuario prefiera menos movimiento, la sección debe mantener jerarquía de aparición sin `y`, `x` ni `scale` pronunciados.

Alternativa considerada:
- mantener la misma secuencia con distancias menores;
- descartada porque sigue imponiendo movimiento innecesario.

## Risks / Trade-offs

- [El embed puede sentirse pesado al entrar] -> Mitigación: animar solo su wrapper, con distancias cortas y sin deformar el iframe.
- [El reveal puede volverse demasiado lento para una sección informativa] -> Mitigación: usar una timeline compacta con overlaps editoriales y sin pausas largas.
- [FOUC o contenido oculto si GSAP no inicia] -> Mitigación: aplicar targets ocultos solo a wrappers concretos y respetar el fallback progresivo ya definido por el proyecto.
- [El drift de glows puede distraer] -> Mitigación: limitarlo a transforms sutiles, opacidad baja y sin robar protagonismo al contenido.
- [La sección puede divergir del patrón global] -> Mitigación: seguir la misma lógica de `autoAlpha`, transforms y `ScrollTrigger` usada en Hero/About.

## Migration Plan

1. Aprobar esta propuesta como cambio aislado para `PodcastSection`.
2. Añadir wrappers locales y selectores GSAP solo dentro de `PodcastSection.astro`.
3. Implementar la timeline principal de reveal con `ScrollTrigger`.
4. Implementar el movimiento ambiental de glows como capa secundaria.
5. Añadir la ruta de reduced motion y validar visibilidad sin JavaScript.
6. Verificar que no se haya tocado ningún otro componente o sección.

## Open Questions

- Confirmar si el quote debe entrar con desplazamiento lateral o vertical para alinearse mejor al tono editorial.
- Confirmar si el CTA y el botón final deben sentirse como dos beats distintos o como un solo cierre continuo.
- Validar si conviene reusar la utilidad global `.js-reveal` o definir un naming local equivalente para esta sección.
