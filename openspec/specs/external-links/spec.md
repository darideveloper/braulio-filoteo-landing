# external-links Specification

## Purpose
TBD - created by archiving change add-target-blank-to-remote-links. Update Purpose after archive.
## Requirements
### Requirement: External links open in new tab
All links pointing to external domains (e.g., social networks, external podcasts, third-party sites) SHALL open in a new browser tab/window.

#### Scenario: User clicks a social media link
- **Given** the user is on any page with social media links (e.g., Footer, Social Section, Sidebar)
- **When** the user clicks on a link pointing to an external platform (e.g., Instagram, LinkedIn, YouTube)
- **Then** the link SHALL open in a new tab using `target="_blank"`.
- **And** the link SHALL include `rel="noopener noreferrer"` for security and performance.

#### Scenario: User clicks an external podcast link
- **Given** the user is in the Collaboration or Podcast section
- **When** the user clicks a link to an external episode or show (e.g., Spotify, YouTube)
- **Then** the link SHALL open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

#### Scenario: User clicks an external plan link
- **Given** the user is in the Plans section
- **When** the user clicks a link to an external platform (e.g., lanzaunpodcast.com)
- **Then** the link SHALL open in a new tab.

### Requirement: Internal links maintain current tab
All internal links (anchors within the page, local routes, or same-domain URLs) SHALL open in the current tab by default.

#### Scenario: User clicks a navigation link
- **Given** the user is on the Home page
- **When** the user clicks a navigation link (e.g., "#about", "#podcast", "#studio")
- **Then** the browser SHALL scroll to the target section or navigate to the local page in the current tab.

