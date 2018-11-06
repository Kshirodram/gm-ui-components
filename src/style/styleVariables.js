// COLORS
export const COLOR_BRAND_A = "#0aab2a";
export const COLOR_BRAND_B = "#0aab2a";
export const COLOR_CONTENT = "#000";

export const COLOR_BACKGROUND_A = "#fff";
export const COLOR_BACKGROUND_B = "#F8F8F8";
export const COLOR_BACKGROUND_C = "#000";

export const COLOR_INTENT_HIGHLIGHT = COLOR_BRAND_A;
export const COLOR_INTENT_SUCCESS = COLOR_BRAND_A;
export const COLOR_INTENT_DANGER = "#D83D22"; // WCAG AA+
export const COLOR_INTENT_WARNING = "#F7CD45"; // WCAG AA+
export const COLOR_INTENT_INFO = "#1E6DF6"; // WCAG AA+

export const COLOR_KEYLINE = "rgba(0,0,0,0.08)";
export const COLOR_KEYLINE_SOLID = "#EBEBEB";

export const OPACITY_100 = "1";
export const OPACITY_70 = "0.7";
export const OPACITY_50 = "0.5";
export const OPACITY_15 = "0.15";

// LAYOUT
export const BORDER_RADIUS_BASE = "3px"; // Will be changed to 4px
export const SPACING_BASE = 8;
export const ICON_VIEWBOX_SIZE = SPACING_BASE * 3; // Move to Icons component?

export const ZINDEX_TOOLTIP = "1070";
export const ZINDEX_STICKY = "1010";

export const RADIUS_05 = "4px"; // spacingScale(0.5);
export const RADIUS_1 = "8px"; // spacingScale(1);
export const RADIUS_2 = "16px"; // spacingScale(2);
export const RADIUS_3 = "24px"; // spacingScale(3);
export const RADIUS_4 = "32px"; // spacingScale(4);
export const RADIUS_5 = "40px"; // spacingScale(5);
export const RADIUS_6 = "48px"; // spacingScale(6);
export const RADIUS_7 = "56px"; // spacingScale(7);
export const RADIUS_8 = "64px"; // spacingScale(8);

// TYPOGRAPHY
export const FONTS_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;
export const FONTS_BRAND = `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`;
export const FONTS_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;

export const FONT_STACK_BASE = `${FONTS_SYSTEM}`;
export const FONT_STACK_BRAND = `${FONTS_BRAND}, ${FONTS_SYSTEM}`;
export const FONT_STACK_CODE = `${FONTS_CODE}, ${FONTS_SYSTEM}`;

export const FONT_SIZE_HERO = "40px";
export const FONT_SIZE_TITLE = "36px"; // Will be changed to 32px
export const FONT_SIZE_LG = "18px"; // Will be changed to 24px
export const FONT_SIZE_MD = "16px"; // Will be changed to 18px
export const FONT_SIZE_BASE = "14px";
export const FONT_SIZE_SM = "11px"; // Will be changed to 12px
export const FONT_SIZE_XS = "9px"; // Will be changed to 10px

export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 400;
export const FONT_WEIGHT_SEMIBOLD = FONT_WEIGHT_BASE * 1.25; // Will be changed to 600
export const FONT_WEIGHT_BOLD = 600; // Will be changed to 700 or 800

// DEPRECATE
export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;

export const keen = {
  name: "Keen",

  COLOR_BRAND_A: "#0aab2a",
  COLOR_BRAND_B: "#0aab2a",
  COLOR_CONTENT: "#000",

  COLOR_BACKGROUND_A: "#ffffff",
  COLOR_BACKGROUND_B: "#F8F8F8",
  COLOR_BACKGROUND_C: "#000000",

  COLOR_INTENT_HIGHLIGHT: "#0aab2a",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE: "rgba(0,0,0,0.08)",
  COLOR_KEYLINE_SOLID: "#EBEBEB",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px", // spacingScale(0.5)
  RADIUS_1: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONTS_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONTS_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_STACK_BASE: FONTS_SYSTEM,
  FONT_STACK_BRAND: "`FONTS_BRAND` + `FONTS_SYSTEM`",
  FONT_STACK_CODE: "`FONTS_CODE` + `FONTS_SYSTEM`",

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "36px", // Will be changed to 32px
  FONT_SIZE_LG: "18px", // Will be changed to 24px
  FONT_SIZE_MD: "16px", // Will be changed to 18px
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "11px", // Will be changed to 12px
  FONT_SIZE_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};

export const keenDark = {
  name: "KeenDark",

  COLOR_BRAND_A: "#0aab2a",
  COLOR_BRAND_B: "#0aab2a",
  COLOR_CONTENT: "#FFF",

  COLOR_BACKGROUND_A: "#000000",
  COLOR_BACKGROUND_B: "#222222",
  COLOR_BACKGROUND_C: "#FFFFFF",

  COLOR_INTENT_HIGHLIGHT: "#0aab2a",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE: "rgba(255,255,255,0.16)",
  COLOR_KEYLINE_SOLID: "#292929",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px", // spacingScale(0.5)
  RADIUS_1: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONTS_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONTS_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_STACK_BASE: FONTS_SYSTEM,
  FONT_STACK_BRAND: "`FONTS_BRAND` + `FONTS_SYSTEM`",
  FONT_STACK_CODE: "`FONTS_CODE` + `FONTS_SYSTEM`",

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "36px", // Will be changed to 32px
  FONT_SIZE_LG: "18px", // Will be changed to 24px
  FONT_SIZE_MD: "16px", // Will be changed to 18px
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "11px", // Will be changed to 12px
  FONT_SIZE_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};

export const genericApp = {
  name: "genericApp",

  COLOR_BRAND_A: "rgb(0,122,255)",
  COLOR_BRAND_B: "rgb(0,122,255)",
  COLOR_CONTENT: "#000",

  COLOR_BACKGROUND_A: "#fff",
  COLOR_BACKGROUND_B: "#eee",
  COLOR_BACKGROUND_C: "#000",

  COLOR_INTENT_HIGHLIGHT: "rgb(0,122,255)",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE: "rgba(0,0,0,0.08)",
  COLOR_KEYLINE_SOLID: "#292929",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px", // spacingScale(0.5)
  RADIUS_1: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONTS_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONTS_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_STACK_BASE: FONTS_SYSTEM,
  FONT_STACK_BRAND: "`FONTS_BRAND` + `FONTS_SYSTEM`",
  FONT_STACK_CODE: "`FONTS_CODE` + `FONTS_SYSTEM`",

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "36px", // Will be changed to 32px
  FONT_SIZE_LG: "18px", // Will be changed to 24px
  FONT_SIZE_MD: "16px", // Will be changed to 18px
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "11px", // Will be changed to 12px
  FONT_SIZE_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};
