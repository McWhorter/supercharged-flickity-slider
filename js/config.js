// -----------------------------------------------------------------------------
// Breakpoints Map
// -----------------------------------------------------------------------------

export const breakpoints = {
  base: 0,
  mobile: 375,
  tablet: 768,
  desktop: 1025,
  desktop_xl: layout.max_width + gutters.desktop * 2,
};

// -----------------------------------------------------------------------------
// Max width of layout container.
// -----------------------------------------------------------------------------

export const layout = {
  max_width: 1200,
};

// -----------------------------------------------------------------------------
// Theme Gutters
// -----------------------------------------------------------------------------

export const gutters = {
  base: 20,
  mobile: 36,
  tablet: 80,
  desktop: 40,
  desktop_xl: 'auto',
};

export default {
  breakpoints,
  gutters,
  layout,
}
