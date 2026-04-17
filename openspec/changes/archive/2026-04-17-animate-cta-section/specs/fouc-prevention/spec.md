# CTA Section Visibility Specification (Delta)

## Purpose

Ensure that the future `CtaSection` animation does not leave primary content hidden if GSAP does not execute or if the page renders without JavaScript.

## ADDED Requirements

### Requirement: Scoped Hidden Targets for CTA Reveal
Scroll-revealed CTA content SHALL hide only the specific wrappers required by the reveal sequence.

#### Scenario: Preparing CTA reveal wrappers
- **WHEN** `CtaSection` marks content for GSAP-driven entrance animation
- **THEN** it SHALL apply the hidden state only to the wrappers used as reveal targets
- **AND** it SHALL NOT hide the whole section container or non-animated structural regions

### Requirement: Safe Visibility Recovery for CTA Content
The CTA section SHALL fail safely if its motion setup does not execute.

#### Scenario: No JavaScript or failed CTA animation setup
- **WHEN** JavaScript is disabled or the CTA GSAP setup does not run
- **THEN** the section header, CTA content, and optional contact block SHALL still be visible
- **AND** no primary conversion content SHALL remain permanently hidden
