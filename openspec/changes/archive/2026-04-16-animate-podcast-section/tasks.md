## 1. Preparacion De La Seccion

- [x] 1.1 Definir wrappers locales y selectores para encabezado, quote, embed, CTA, boton final y glows dentro de `PodcastSection.astro`.
- [x] 1.2 Definir que targets deben iniciar ocultos para el reveal sin ocultar contenedores estructurales innecesarios.

## 2. Motion Principal

- [x] 2.1 Implementar una timeline GSAP con `ScrollTrigger` para el reveal editorial de `PodcastSection`.
- [x] 2.2 Implementar el orden de reveal para encabezado, quote, embed, CTA y boton final usando `autoAlpha` y transforms.
- [x] 2.3 Ajustar overlaps y duracion para que la seccion mantenga un ritmo editorial consistente con Hero y About.

## 3. Motion Ambiental Y Accesibilidad

- [x] 3.1 Implementar movimiento ambiental sutil para los glows decorativos sin interferir con el contenido principal.
- [x] 3.2 Implementar la variante de `prefers-reduced-motion` con visibilidad inmediata o fade corto.
- [x] 3.3 Verificar que el embed de Spotify se anime solo a traves de su wrapper externo.

## 4. Validacion

- [x] 4.1 Verificar que la seccion sea visible si JavaScript esta deshabilitado o GSAP no se ejecuta.
- [x] 4.2 Verificar que no se modifique ningun otro componente ni seccion del sitio.
- [x] 4.3 Verificar que la animacion use solo propiedades performantes y no cause layout jank.
