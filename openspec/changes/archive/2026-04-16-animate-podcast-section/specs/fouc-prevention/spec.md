# Podcast Section Visibility Specification (Delta)

## Purpose

Asegurar que la futura animación de `PodcastSection` no deje contenido crítico oculto si GSAP no se ejecuta o si el usuario navega con JavaScript deshabilitado.

## ADDED Requirements

### Requirement: Scoped Hidden Targets for Podcast Reveal
Scroll-revealed Podcast content SHALL hide only the specific animated wrappers required by the reveal sequence.

#### Scenario: Preparing Podcast reveal wrappers
- **WHEN** `PodcastSection` marks content for GSAP-driven entrance animation
- **THEN** it SHALL apply the hidden state only to the wrappers used as reveal targets
- **AND** it SHALL NOT hide the whole section container or non-animated structural regions

### Requirement: Safe Visibility Recovery for Podcast Content
The Podcast section SHALL fail safely if its motion setup does not execute.

#### Scenario: No JavaScript or failed Podcast animation setup
- **WHEN** JavaScript is disabled or the Podcast GSAP setup does not run
- **THEN** the section header, quote, embed, CTA, and final button SHALL still be visible
- **AND** no primary conversion or discovery content SHALL remain permanently hidden
