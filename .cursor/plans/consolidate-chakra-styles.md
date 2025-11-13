## Plan: Consolidate Chakra Light/Dark SCSS

### Objective
Replace the separate Chakra light and dark Sass files with a unified stylesheet that derives its colors from CSS custom properties, ensuring all Sass functions resolve during compilation.

### Steps
1. **Audit Existing Sass Variables**
	- List every `$chakra-*` token defined in `src/scss/chakra/light.scss` and `src/scss/chakra/dark.scss`.
	- Pair light and dark values by semantic intent (success, info, warning, error; primary/alt/bold/light/border/etc.).
2. **Define Shared CSS Custom Properties**
	- Inside `.template-chakra`, declare CSS variables for each light-mode token (e.g., `--chakra-success-color`, `--chakra-success-border`).
	- Add `.template-chakra.is-dark-mode` overrides assigning the corresponding dark-mode values.
	- Wrap any computed Sass expressions or `map-get` calls in interpolation (`#{}`) so the compiled CSS emits concrete color values.
3. **Centralize Structural Styles**
	- Extract common layout, typography, button, and icon rules into reusable blocks or mixins that reference the new CSS variables via `var(--chakra-… , fallback)`.
	- Remove duplicated selectors that currently differ only by hard-coded light/dark values.
4. **Compose the Unified Stylesheet**
	- Create `src/scss/chakra/styles.scss` that imports `../common.scss`, defines the CSS variable scopes, and includes the consolidated component rules.
	- Update any imports or build references to target the new `styles.scss` and retire `light.scss`/`dark.scss`.
5. **Build and Verify**
	- Run the Sass/webpack build to regenerate `dist/alerts-dlx-chakra-styles.css`, checking for absent `map-get` artifacts.
	- Inspect light and dark alert variants in the editor and frontend to confirm color fidelity and fallbacks.
	- Align PHP enqueue handles and build entry names if a new stylesheet name is introduced.
6. **Document Reusable Pattern**
	- Summarize the variable and interpolation approach so the same consolidation process can be applied to Material and Shoelace themes.

