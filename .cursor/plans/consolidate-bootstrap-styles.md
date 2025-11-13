## Plan: Consolidate Bootstrap Light/Dark SCSS

### Objective
Replace hard-coded Bootstrap color values in the current light and dark theme SCSS files with CSS custom properties, then merge the duplicated structural rules into a single `styles.scss` while preserving both theme variations and reducing repetition.

### Steps
1. **Audit Existing Variables**
	- Catalog every `$bootstrap-*` variable declared in `src/scss/bootstrap/light.scss` and `src/scss/bootstrap/dark.scss`.
	- Note shared semantic names (primary, secondary, etc.) and record the light/dark values for each token.
2. **Define Shared Custom Properties**
	- Establish a base set of CSS variables (e.g., `--bootstrap-primary`, `--bootstrap-primary-border`) within `.template-bootstrap`.
	- Provide dark-mode overrides within `.template-bootstrap.is-dark-mode`, ensuring each variable maps to the cataloged dark value.
3. **Refactor Component Styles**
	- Extract the common structural rules from both files into a single block or reusable mixin that references the new CSS variables.
	- Replace all color references in these rules with `var(--bootstrap-...)` lookups, retaining fallbacks where necessary.
4. **Compose `styles.scss`**
	- Create `src/scss/bootstrap/styles.scss` that imports `../common.scss`, declares variable defaults, defines light/dark scopes, and outputs the consolidated component styles.
	- Remove redundant declarations left over from the split files.
5. **Optimize & Validate**
	- Scan for duplicate selectors, nested blocks, or variables that can be simplified further (consider SCSS maps for alert variants if beneficial).
	- Compile the SCSS to verify output matches expectations for both themes and run project linting/formatting routines as required.

