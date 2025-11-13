## Plan: Fix Bootstrap CSS Variable Compilation

### Objective
Resolve the issue where the compiled CSS still contains unevaluated `map-get(...)` expressions, ensuring the new consolidated Bootstrap stylesheet outputs actual color values. Prepare a repeatable approach to apply across remaining component libraries.

### Steps
1. **Reproduce & Inspect**
	- Confirm the compiled `dist/alerts-dlx-bootstrap-styles.css` contains the raw `map-get` strings.
	- Identify the SCSS blocks that emit these custom property declarations (likely the mixins using `map-get`).
2. **Adjust SCSS Interpolation**
	- Update the mixins so each CSS custom property wraps its value in interpolation (e.g., `#{map-get(...)}`) to force Sass evaluation.
	- Ensure nested `map-get(map-get(...))` calls are also interpolated.
3. **Recompile & Verify**
	- Run the build to regenerate CSS output and confirm variables resolve to hex values.
	- Check both light and dark theme scopes for correct colors.
4. **Align Build Handles**
	- Normalize naming between webpack entry (`alerts-dlx-bootstrap-styles`) and PHP enqueue handle (`alerts-dlx-bootstrap-css`) to avoid mismatches.
	- Update any references to use the finalized consolidated handle (`alerts-dlx-bootstrap-styles` or chosen final name).
5. **Document Repeatable Pattern**
	- Capture the interpolation pattern and build-handle approach so the remaining Chakra, Material, and Shoelace libraries can follow the same consolidation process.

