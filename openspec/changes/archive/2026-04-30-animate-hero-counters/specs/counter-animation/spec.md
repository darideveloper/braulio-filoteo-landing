# Capability: Hero Counter Animation

## ADDED Requirements

### Requirement: Stat Item Hooks
The `StatItem` component MUST provide hooks for JavaScript-driven counter animations.
- It MUST store its final value in a `data-value` attribute.
- It MUST identify its value element with a `js-stat-value` class.

#### Scenario: Rendering a stat item
- **Given** a `StatItem` with value "100+"
- **Then** the rendered HTML should contain `<p class="... js-stat-value" data-value="100+">100+</p>`

### Requirement: Hero Animation Trigger
The Hero section entrance animation MUST trigger a counter animation for its statistics.
- The counter animation MUST synchronize with the final element of the main entrance timeline (e.g. scroll indicator).
- The counters MUST start at "0" (plus suffix) immediately before the animation begins.

#### Scenario: Hero entrance completes
- **Given** the Hero section entrance sequence reaches its final element
- **Then** the counters for "Episodios" and "Marcas Personales" should count up from 0 to their respective targets concurrently.

### Requirement: Studio Animation Trigger
The HeroNoir section MUST trigger a counter animation for its stat box when scrolled into view.
- The counter animation MUST synchronize with the final element of the entrance timeline (e.g. portrait).
- The counters MUST start at "0" (plus suffix) immediately before the animation begins.

#### Scenario: User scrolls to Studio section
- **Given** the HeroNoir section entrance sequence reaches its final element
- **Then** the stat value (e.g., "1983") should count up from 0 concurrently.
