// Next ships a declaration for `*.module.css` only, so plain global stylesheet
// imports (`import "./globals.css"`) have no types. TypeScript ignores that by
// default, but editors and TS >= 5.6 with `noUncheckedSideEffectImports` flag
// it as an unresolved module.
declare module "*.css";
