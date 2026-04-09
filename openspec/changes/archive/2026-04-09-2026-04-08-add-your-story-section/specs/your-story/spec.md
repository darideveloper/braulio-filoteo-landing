# Spec: Your Story Section

The "Your Story" section is a centered, high-impact storytelling hero module designed to reinforce the project's editorial brand identity.

## ADDED Requirements

### Requirement: High-Impact Editorial Headline
The section MUST feature a large, centered, uppercase headline with mixed typographic treatments.
- **Requirement 1**: Use the `display-2xl` utility for responsive font sizes (6xl to 8xl).
- **Requirement 2**: Mix standard white text with `brand-secondary` (orange) for emphasis.
- **Requirement 3**: Use the `decoration-editorial` utility (purple underline) for specific brand highlights.
#### Scenario: Desktop Rendering
- **Given** the user is on a large screen (md+).
- **When** the "Your Story" section is rendered.
- **Then** the headline font size MUST be 8xl.
- **And** the word "MERECE" MUST have a thick purple underline.

### Requirement: Subheadline with Storytelling Highlights
The section MUST include a centered subheadline with inline highlights that emphasize key storytelling elements.
- **Requirement 1**: Use a max-width container (4xl) to maintain optimal line length.
- **Requirement 2**: Highlight specific phrases using `border-b-2 border-brand-secondary`.
#### Scenario: Subheadline Highlights
- **Given** the subheadline "convertir tu voz en una plataforma".
- **When** "convertir tu voz" and "plataforma" are rendered.
- **Then** they MUST have an orange bottom border to draw attention.

### Requirement: Centered CTA & Contact Row
The section MUST provide a centered action row with a primary CTA and contact information.
- **Requirement 1**: Use the `BrandButton` component with its architectural default `rounded-[0.25rem]`.
- **Requirement 2**: Use `MaterialIcon` and `label-md` utility for contact details.
#### Scenario: CTA Action
- **Given** the "Crea tu podcast" button.
- **When** rendered in the "Your Story" section.
- **Then** it MUST be centered and use the primary gradient variant.

### Requirement: Subtle Background Watermark
The section MUST include a subtle, large background watermark to break visual monotony.
- **Requirement 1**: Use the `text-watermark` utility for the text "GRIT".
- **Requirement 2**: Position it absolutely behind the content, contained by the section.
#### Scenario: Watermark Containment
- **Given** the "GRIT" watermark text.
- **When** rendered.
- **Then** it MUST have an opacity of approximately 0.03.
- **And** it MUST NOT cause horizontal overflow.
