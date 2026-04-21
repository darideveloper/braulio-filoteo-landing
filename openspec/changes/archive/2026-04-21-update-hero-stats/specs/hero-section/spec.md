# hero-section Specification Delta

## MODIFIED Requirements

### Requirement: Editorial Statistics
The Hero section SHALL display micro-credibility signals using consistent editorial styling.

#### Scenario: Stat item structure
- **GIVEN** a statistical metric.
- **THEN** it SHALL feature a `border-l-4` accent using `brand-primary` or `brand-secondary`.
- **AND** the number SHALL use `font-brand-display` at `text-2xl` or larger.

#### Scenario: Stat item content update
- **GIVEN** the `Hero` section is rendered.
- **WHEN** the statistics are displayed.
- **THEN** the first statistic SHALL show "100+" as the value and "EPISODIOS" as the label.
- **AND** the second statistic SHALL show "30+" as the value and "MARCAS PERSONALES APOYADAS" as the label.
